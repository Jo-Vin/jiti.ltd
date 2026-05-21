import { contact } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900/10 px-4 py-8 text-sm text-zinc-700 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Jiti Ltd. Product design,
          development, and automation studio.
        </p>
        <p className="text-zinc-600">
          Contact:{" "}
          <a
            className="underline decoration-zinc-500/50 underline-offset-4"
            href={contact.emailLink}
          >
            {contact.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
