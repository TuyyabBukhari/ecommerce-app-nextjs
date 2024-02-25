const navRoutes: NavRouteType[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Men's",
    url: "/products/mens",
  },
  {
    name: "Womens's",
    url: "/products/womens",
  },
  {
    name: "Kid's",
    url: "/products/kids",
  },
  {
    name: "All Products",
    url: "/products",
  },
];

export interface NavRouteType {
  name: string;
  url: string;
}

export default navRoutes;
