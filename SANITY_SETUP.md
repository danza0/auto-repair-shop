# Sanity CMS setup

The dashboard lives at `/studio` on the same site as the marketing pages —
so once deployed, the client logs in at `https://auto-repair-shop-eta.vercel.app/studio`
to edit every text, image, service, testimonial, gallery photo, phone
number, hours, etc.

Everything below is a one-time setup. Once done, the client never touches
code again.

---

## 1. Create the Sanity project (one command)

From this repo, run:

```bash
npx sanity@3 init --env
```

Answer the prompts:
- **Login** → opens your browser. Log in with Google / GitHub.
- **Create new project?** → **Yes**
- **Project name** → `SmartCare Auto Repair`
- **Use the default dataset configuration?** → **Yes** (creates `production`)
- **Project output path** → **just press Enter** (accept default)
- **Add configuration files** → **No** (this repo already has them)
- **Add sanity to your project?** → **No** (already added)

When it finishes it prints the `projectId`. Copy it.

It also writes `.env.local` for you with `NEXT_PUBLIC_SANITY_PROJECT_ID`
and `NEXT_PUBLIC_SANITY_DATASET`.

## 2. Create a write token for the seed script

Go to [sanity.io/manage](https://sanity.io/manage) → your project → **API** → **Tokens** → **Add API token**:
- **Name**: `seed-script`
- **Permissions**: **Editor**
- Copy the token (only shown once).

Open `.env.local` and add:

```
SANITY_API_WRITE_TOKEN=<the token you just copied>
SANITY_REVALIDATE_SECRET=<any long random string, save it — we'll paste it into Sanity in step 5>
```

## 3. Seed the current site content into Sanity

```bash
npm run seed
```

This uploads the 7 gallery photos from `public/gallery/`, all services,
testimonials, hero, footer info, stats, process steps, and the "Why
Choose Us" tiles. Idempotent — safe to re-run.

## 4. Open the Studio locally to verify

```bash
npm run dev
```

Visit [http://localhost:3000/studio](http://localhost:3000/studio),
sign in with the same account you used to create the project, and you
should see the sidebar:

```
Site Settings
Hero Section
─────
Services
Specialty Strips
Testimonials
Gallery
─────
Trust Stats
Why Choose Us
Process Steps
```

Click any of these, edit something, hit **Publish** — the change appears
on the site on the next request.

## 5. Push env vars to Vercel + hook up the publish webhook

**In Vercel** → your project → **Settings** → **Environment Variables**, add:

| Name | Value |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | (same as .env.local) |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_REVALIDATE_SECRET` | (same random string as .env.local) |

Redeploy (Vercel → Deployments → the latest one → Redeploy).

**In sanity.io/manage** → your project → **API** → **Webhooks** → **Create webhook**:
- **Name**: `revalidate-site`
- **URL**: `https://auto-repair-shop-eta.vercel.app/api/revalidate`
- **Dataset**: `production`
- **Trigger on**: Create, Update, Delete
- **Filter**: (leave empty)
- **Secret**: paste the same `SANITY_REVALIDATE_SECRET` value
- **HTTP method**: `POST`
- **API version**: `2024-10-01`

Save. Now every **Publish** in the Studio revalidates the whole site
within about a minute — no rebuild needed.

## 6. Invite the client

**sanity.io/manage** → your project → **Members** → **Invite members**:
- Enter the client's email address.
- **Role**: `Editor` (can create/edit/publish content) or `Viewer` (read-only).

They'll get an email with a login link. Once they set a password, they
go to `https://auto-repair-shop-eta.vercel.app/studio` and log in.

That's it — they can now change every piece of text, upload photos,
add or remove services, add testimonials, all without touching code.

---

## Where to change what

| To change… | Sanity section |
|---|---|
| Phone, email, address, hours, meta title/description, footer copy | **Site Settings** |
| Big hero headline, subhead, CTA labels, background photo, trust chips | **Hero Section** |
| Any service card (add / edit / remove / reorder) | **Services** |
| The three big rows below the services grid | **Specialty Strips** |
| Customer reviews in the auto-scrolling row | **Testimonials** |
| Photos in the "Real work. Real shop." gallery | **Gallery** |
| Big numbers (2000+, 5.0, 3, 100%) | **Trust Stats** |
| The six tiles under "Trusted by Thousands" | **Why Choose Us** |
| Steps in "Simple from Start to Finish" | **Process Steps** |

## Delete a service without breaking anything

Services are keyed by slug. If the client deletes one:
- It's gone from `/services` and the homepage.
- Anyone who bookmarked `/book?service=<that-slug>` gets the generic
  booking form.
- No redeploy needed.

## Fallback behavior when Sanity is empty

Every section falls back to the hardcoded defaults if Sanity returns
nothing. That's why the site still renders during setup — safe to
deploy this branch before running the seed script.
