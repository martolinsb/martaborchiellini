import { profile } from "../settings";
import { template } from "../settings";

export function highlightAuthor(authors: string): string {
  const author = authors.split(", ");
  if (author.includes(profile.author_name)) {
    return authors.replace(
      profile.author_name,
      `<span class='font-medium underline'>${profile.author_name}</span>`,
    );
  }
  return authors;
}

export function trimExcerpt(excerpt: string): string {
  const excerptLength = template.excerptLength;
  return excerpt.length > excerptLength
    ? `${excerpt.substring(0, excerptLength)}...`
    : excerpt;
}

export function orderElement<T extends { time: string }>(a: T, b: T) {
  const presentValues = ["present", "now", "current", "today", ""];
  let dateA, dateB: Date;
  if (
    presentValues.includes(
      (a["time"] as string)?.split(" - ")[1]?.toLowerCase(),
    ) ||
    presentValues.includes(a["time"] as string)
  ) {
    // If the date is 'present', it should be the first element
    return -1;
  }

  if (a["time"].includes("-") === false) {
    dateA = new Date(a["time"] as string);
  } else {
    dateA = new Date((a["time"] as string)?.split(" - ")[1]);
  }

  if (b["time"].includes("-") === false) {
    dateB = new Date(b["time"] as string);
  } else {
    dateB = new Date((b["time"] as string)?.split(" - ")[1]);
  }

  return dateB.getTime() - dateA.getTime();
}
