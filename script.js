const navbarTopSection = document.getElementById("nav-top");
const navbarMainSection = document.getElementById("nav-bar");
const heroSection = document.getElementById("hero");

const createNavTop = () =>{
    const logo = document.createElement('a');
    logo.href = "index.html"
    logo.className = 'flex items-center justify-center hover:border border-white'
    const logoIcon = document.createElement('i');
    logoIcon.className ='bx bxs-shopping-bags text-white text-2xl'
    const logoText = document.createElement('p')
    logoText.innerText = "everydayMart"
    logoText.className = "font-['Noto_Serif'] italic p-1 "
    logo.append(logoIcon, logoText)

    const searchBar = document.createElement('div');
    const searchMenuIcon = document.createElement('i');
    searchMenuIcon.className = 'bx bx-down-arrow bg-[#6292a3] rounded-l p-[10px] text-base';
    const searchInput = document.createElement('input');
    searchInput.type ='text';
    searchInput.placeholder = 'Search EverydayMart';
    searchInput.className = 'border-2 w-[50vw] p-[8px] text-black';
    const searchIcon = document.createElement('i');
    searchIcon.className = 'bx bx-search bg-[#6292a3] rounded-r p-[10px] text-base';
    searchBar.append(searchMenuIcon, searchInput, searchIcon)

    const topNavLeft = document.createElement('div');
    topNavLeft.className = 'flex items-center justify-between p-2'
    const signInButton = document.createElement('a');
    signInButton.innerText= "Sign In";
    signInButton.className = "hover:border border-white p-2";
    const signUpButton = document.createElement('a');
    signUpButton.innerText= "Sign Up";
    signUpButton.className = "hover:border border-white p-2";
    const cartIcon = document.createElement('i');
    cartIcon.className = 'bx bx-cart hover:border border-white p-2 text-4xl';
    topNavLeft.append(signInButton, signUpButton, cartIcon);
    return {logo, searchBar, topNavLeft};
}   

const { logo, searchBar , topNavLeft} = createNavTop();
navbarTopSection.append(logo, searchBar, topNavLeft);

const createNavBarMain = () =>{
    const categoriesMenu = document.createElement('div');
    categoriesMenu.className = 'flex items-center gap-1 hover:border border-white'
    const menuIcon = document.createElement('i');
    menuIcon.className ='bx bx-menu text-xl';
    const menuText = document.createElement('p');
    menuText.innerText = 'All Categories';
    categoriesMenu.append(menuIcon, menuText);

    const sideNavMenuItems = ['Home', 'Shop', 'Blog', 'About', 'Contact'];
    const sideNav = document.createElement('ul');
    sideNav.className = 'flex gap-10'
    sideNavMenuItems.forEach((item) =>{
       const li= document.createElement('li');
       const a = document.createElement('a');
       a.innerText = item;
       a.href = '#';
       li.appendChild(a);
       sideNav.appendChild(li)
    })
    return {categoriesMenu, sideNav}
}
const {categoriesMenu, sideNav} = createNavBarMain();
navbarMainSection.append(categoriesMenu, sideNav);

const slides = [
    {
      title: 'everydayMart',
      subtitle: 'Everything you need, everyday, anywhere, essentials made effortless. Find it all here.',
      buttonText: 'Shop Now',
      image: './images/hero1.png'
    },
    {
      title: 'Exciting Deals!',
      subtitle: 'Shop the best offers on your favorite products.',
      buttonText: 'Explore Now',
      image: './images/hero2.png'
    },
    {
      title: 'New Arrivals',
      subtitle: 'Discover the latest products just for you.',
      buttonText: 'Check It Out',
      image: './images/hero.webp'
    }
  ];
 
function createSlide(slide){
        const slideDiv = document.createElement('div');
        slideDiv.className = 'flex items-center justify-center px-36 w-[100%] h-[100%] absolute'
        slideDiv.style.transition = '1s'
        const slideText =  document.createElement('div');
        const slideTitle = document.createElement('h1');
        slideTitle.innerText = slide.title;
        slideTitle.className = "font-['Noto_Serif'] font-bold italic text-[5vw] text-[#273b42]";
        const slideSubTitle = document.createElement('h1');
        slideSubTitle.innerText = slide.subtitle;
        slideSubTitle.className = "font-['Noto_Serif'] font-bold text-[#4a7382] text-xl";
        const slideButton = document.createElement('button');
        slideButton.innerText = slide.buttonText;
        slideButton.className = 'bg-[#6292a3] hover:bg-[#4a7382] px-4 py-3 mt-10 text-[#f9f1f0] rounded shadow-xl';
        slideText.append(slideTitle, slideSubTitle, slideButton);
        const slideImage = document.createElement('img');
        slideImage.src = slide.image;
        slideImage.alt = slide.title;
        slideImage.className = 'w-[60%]';
        slideDiv.append(slideText, slideImage);       
    return slideDiv;
}

/*const createHeroSection = () =>{
    const carousel = document.createElement('div');
    carousel.className ='carousel'
    carousel.classList.add('flex', 'transition-transform', 'duration-1000', 'ease-in-out', 'h-full', 'w-[300%]');
    slides.forEach((slide)=>{
    const slideDiv = createSlide(slide)
    carousel.appendChild(slideDiv);
})
return carousel;
}
 const heroSectionContainer = createHeroSection();
heroSection.appendChild(heroSectionContainer );
*/
let counter = 0;
const createHeroSection = () =>{
    slides.forEach((slide, index)=>{
    const slideDiv = createSlide(slide);
    slideDiv.style.left = `${index*100}%`
    slideDiv.style.transform = `translateX(-${counter * 100}%)`
    heroSection.appendChild(slideDiv);
})
return heroSection;
}
// const heroSectionNavigation = 
createHeroSection();

