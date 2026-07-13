const filter = document.querySelector<HTMLSelectElement>("#project-filter");
const search = document.querySelector<HTMLInputElement>("#project-search");
const count = document.querySelector<HTMLElement>("#project-count");
const emptyState = document.querySelector<HTMLElement>("#empty-state");
const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-project-card]"));

function updateProjectVisibility() {
  if (!filter || !search || !count || !emptyState) return;

  const selectedCategory = filter.value;
  const query = search.value.trim().toLowerCase();
  let visible = 0;

  cards.forEach((card) => {
    const categories = card.dataset.categories?.split("|") ?? [];
    const searchable = card.dataset.search ?? "";
    const matchesCategory = selectedCategory === "All" || categories.includes(selectedCategory);
    const matchesSearch = query.length === 0 || searchable.includes(query);
    const isVisible = matchesCategory && matchesSearch;

    card.hidden = !isVisible;
    if (isVisible) visible += 1;
  });

  count.textContent = `${visible} ${visible === 1 ? "case study" : "case studies"} visible`;
  emptyState.hidden = visible !== 0;
}

filter?.addEventListener("change", updateProjectVisibility);
search?.addEventListener("input", updateProjectVisibility);
