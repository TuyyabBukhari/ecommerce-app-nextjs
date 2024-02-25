import { max } from "moment";

export const products = ({
  maxItems = 9999,
  category = "*",
}: {
  maxItems?: number;
  category?: string;
}) => {
  const products = [
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "men",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "men",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "men",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "men",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "men",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "men",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "men",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "women",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "women",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "women",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "women",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "kid",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "kid",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "kid",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "kid",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      _id: "12021301-123-23-123123123",
      title: "Hermes Gram",
      category: "kid",
      price: 185,
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
  ];

  const result: any = products
    .filter((item: any, index: number) => index < maxItems)
    .filter((item: any, index: number) =>
      category === "*" ? true : item.category === category ? true : false
    );

  return result;
};
