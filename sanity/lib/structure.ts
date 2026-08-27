import type { StructureResolver } from "sanity/structure";
import {
  CogIcon,
  HomeIcon,
  WrenchIcon,
  StarIcon,
  CommentIcon,
  BarChartIcon,
  RocketIcon,
  ImageIcon,
  HeartIcon,
} from "@sanity/icons";

/**
 * Sidebar layout for the client. Singletons (Site Settings, Hero) appear as
 * one document you click straight into. Collections group under labeled folders.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("SmartCare CMS")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site Settings"),
        ),
      S.listItem()
        .title("Hero Section")
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType("hero")
            .documentId("hero")
            .title("Hero Section"),
        ),
      S.divider(),
      S.listItem()
        .title("Services")
        .icon(WrenchIcon)
        .child(
          S.documentTypeList("service")
            .title("Services")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.listItem()
        .title("Specialty Strips")
        .icon(StarIcon)
        .child(
          S.documentTypeList("specialty")
            .title("Specialty Strips")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.listItem()
        .title("Testimonials")
        .icon(CommentIcon)
        .child(
          S.documentTypeList("testimonial")
            .title("Testimonials")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.listItem()
        .title("Gallery")
        .icon(ImageIcon)
        .child(
          S.documentTypeList("galleryPhoto")
            .title("Gallery")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.divider(),
      S.listItem()
        .title("Trust Stats")
        .icon(BarChartIcon)
        .child(
          S.documentTypeList("stat")
            .title("Trust Stats")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.listItem()
        .title("Why Choose Us")
        .icon(HeartIcon)
        .child(
          S.documentTypeList("trustReason")
            .title("Why Choose Us Reasons")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.listItem()
        .title("Process Steps")
        .icon(RocketIcon)
        .child(
          S.documentTypeList("processStep")
            .title("Process Steps")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
    ]);
