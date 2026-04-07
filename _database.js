const books = [
  {
    id: "1",
    title: "Bumi",
    author: "Tere Liye",
    published_at: "2013-01-01",
    category: "Novel",
    total: 10,
  },
  {
    id: "2",
    title: "Rembulan Tenggelam di Wajahmu",
    author: "Tere Liye",
    published_at: "2013-01-01",
    category: "Novel",
    total: 10,
  },
];

const members = [
  {
    id: "1",
    name: "Bachtiar Dwi Pramudi",
    email: "bachtiar@example.com",
    verified: true,
  },
  {
    id: "2",
    name: "Nadhifatus Aulia Enggarsya",
    email: "nadhifatus@example.com",
    verified: true,
  },
];

const lendings = [
  {
    id: "001",
    book_id: "1",
    member_id: "1",
    lent_at: "2024-01-01",
    return_at: "2026-01-15",
  },
  {
    id: "002",
    book_id: "2",
    member_id: "2",
    lent_at: "2024-01-01",
    return_at: "2026-01-16",
  },
];

export { books, members, lendings };
