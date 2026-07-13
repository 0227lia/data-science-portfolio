const filter = document.querySelector<HTMLSelectElement>("#project-filter");
const search = document.querySelector<HTMLInputElement>("#project-search");
const count = document.querySelector<HTMLElement>("#project-count");
const emptyState = document.querySelector<HTMLElement>("#empty-state");
const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-project-card]"));
const rows = Array.from(document.querySelectorAll<HTMLElement>("[data-project-row]"));

function updateProjectVisibility() {
  if (!filter || !search || !count || !emptyState) return;

  const selectedCategory = filter.value;
  const query = search.value.trim().toLowerCase();
  let visible = 0;

  const matchesFilters = (item: HTMLElement) => {
    const categories = item.dataset.categories?.split("|") ?? [];
    const searchable = item.dataset.search ?? "";
    const matchesCategory = selectedCategory === "All" || categories.includes(selectedCategory);
    const matchesSearch = query.length === 0 || searchable.includes(query);
    return matchesCategory && matchesSearch;
  };

  cards.forEach((card) => {
    const isVisible = matchesFilters(card);
    card.hidden = !isVisible;
    if (isVisible) visible += 1;
  });

  rows.forEach((row) => {
    row.hidden = !matchesFilters(row);
  });

  count.textContent = `${visible} ${visible === 1 ? "case study" : "case studies"} visible`;
  emptyState.hidden = visible !== 0;
}

filter?.addEventListener("change", updateProjectVisibility);
search?.addEventListener("input", updateProjectVisibility);
