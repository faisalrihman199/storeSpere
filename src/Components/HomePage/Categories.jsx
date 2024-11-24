import React, { useState } from 'react';

const Categories = () => {
    const categories = [
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1731911089130-Flash%20Deal%20TIle%20Old..webp",
          label: "Flash Deals"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730361235054-Male%20Footwear%20-%20catTile..webp",
          label: "Male Footwear"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730361702915-Skincare%20-%20catTile..webp",
          label: "Skin Care"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1723791244601-Sabzi%20%281%29..webp",
          label: "Fruits & Vegetables"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730813732721-Frozen%20Tile_11zon..webp",
          label: "Frozen Essentials"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730834506078-Breakfast%20-%20catTile..webp",
          label: "Breakfast"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730359874688-Bath%20%26%20Body%20-%20catTile..webp",
          label: "Bath & Body"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730360204636-Hair%20care%20-%20catTile..webp",
          label: "Hair Care"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730449797606-Anaaj%20%20-%20catTile..webp",
          label: "Staples"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730361737427-Snacks%20%20-%20catTile..webp",
          label: "Snacks"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730361588281-Personal%20Care%20%20-%20catTile..webp",
          label: "Personal Care"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1732384757854-Skincare%20-%20catTile%20%281%29..webp",
          label: "Fragrances & Deodrants"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1696923772417-SAFAYI%20MART%20%281%29..webp",
          label: "Safayi Mart"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730361462792-Oil%20%26%20Ghee%20%20-%20catTile..webp",
          label: "Oil & Ghee"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730361436433-Noodles%20%26%20Sauces%20%20-%20catTile..webp",
          label: "Noodles & Sauces"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730359655312-Beverages%20%20-%20catTile..webp",
          label: "Beverages"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1721378999603-Cat%20Tile..webp",
          label: "Special Deals"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730361307234-Masala%20%20-%20catTile..webp",
          label: "Spices & Seasoning"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730359977127-Dairy%20%20-%20catTile..webp",
          label: "Dairy"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730359615211-Baking%20%26%20Desserts%20%20-%20catTile..webp",
          label: "Baking & Desserts"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730360329204-Household%20Supplies%20%20-%20catTile..webp",
          label: "Household Supplies"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730359798610-Cleaning%20%26%20Laundry%20%20-%20catTile..webp",
          label: "Cleaning & Laundry"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730359740438-Chai%20%26%20Coffee%20%20-%20catTile..webp",
          label: "Tea & Coffee"
        },
        {
          image: "https://admin.dealcart.io/categories/thumbnail-1730360237986-Health%20%26%20Wellness%20%20-%20catTile..webp",
          label: "Health & Wellness"
        }
      ];
      

  const [showAll, setShowAll] = useState(false);

  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };

  const visibleCategories = showAll ? categories : categories.slice(0, 12); // Show only first 6 categories initially

  return (
    <div className="mt-8 md:mt-16">
      <div className="flex justify-between items-center px-3">
        <h4 className="text-xl font-medium text-dcDark text-left my-5">Categories</h4>
        
        <button
        onClick={handleViewAllClick}
        className="text-blue-500 font-semibold sm:hidden underline"
      >
        {showAll ? "Show Less" : "View All"}
      </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-center">
        {visibleCategories.map((category, index) => (
          <div key={index} className="category-container ">
            <div className="category h-100 w-100 md:h-44 md:w-44 overflow-hidden p-2 " >
              <img
                src={category.image}
                alt={category.label}
                className="max-h-full h-full w-full"
                style={{borderRadius:'30px'}}
              />
            </div>
            <div className="label mx-auto font-medium text-base text-dcDark md:font-semibold md:text-lg my-3 px-2 ms-2 ">
              {category.label}
            </div>
          </div>
        ))}
      </div>

      <div className='sm:flex hidden flex justify-center my-5' >

        <button
            onClick={handleViewAllClick}
            className={`mt-4 text-blue-500 font-semibold ${showAll?'underline':'site-color text-white p-3 px-5 rounded-full'}`}
        >
            {showAll ? "Show Less" : "View All"}
        </button>
      </div>
      
    </div>
  );
};

export default Categories;
