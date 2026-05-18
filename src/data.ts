export interface Person {
  id: string;
  name: string;
  role: string;
  photo: string;
  phone?: string;
  emails?: string[];
}

export const phdCoordinators: Person[] = [
  {
    id: "phd-1",
    name: "Dr. P.K. Shah",
    role: "Associate Professor",
    photo: "/people/pdh-1.png",
    phone: "+91 94295 10861",
    emails: ["ic_ikshe@svnit.ac.in", "pks@eced.svnit.ac.in"]
  },
];

export const volunteers: Person[] = [
  {
    id: "vol-1",
    name: "Manav Dhamecha",
    role: "Student",
    photo: "/people/vol-1.jpeg"
  },
];
