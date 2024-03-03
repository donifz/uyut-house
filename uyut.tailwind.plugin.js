const plugin = require("tailwindcss/plugin");

const rb = ({ addComponents }) => {
  addComponents({
    //heading
    ".layout-container": {
      "@apply w-full flex flex-col  min-h-screen bg-white":{},
    },
    ".header-container": {
      "@apply w-full z-[100] flex items-center h-auto bg-white":{},
    },
    ".container-size": {
      "@apply w-full max-w-[1728px] px-5 lg:px-[120px] mx-auto":{},
    },
    // ".header-content_container": {
    //   "@apply container-size  flex flex-row items-center h-[60px] lg:h-[80px] py-2.5 lg:py-5  gap-2.5 lg:gap-[60px]":{},
    // },
  });
};

module.exports = plugin(rb);
