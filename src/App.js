import "./App.css";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";
import Black from "./img/varietiesOfTea/black.jpg";
import Green from "./img/varietiesOfTea/green.jpg";
import White from "./img/varietiesOfTea/white.jpg";
import Oolong from "./img/varietiesOfTea/oolong.jpg";
import Puerh from "./img/varietiesOfTea/pu-erh.jpg";
import Cart from "./img/icons/cart.svg";
import Search from "./img/icons/search.svg";
import User from "./img/icons/user.svg";
import PostImage1 from "./img/postImages/blog-image1.jpg";
import PostImage2 from "./img/postImages/blog-image2.jpg";
import PostImage3 from "./img/postImages/blog-image3.jpg";
import PostImage4 from "./img/postImages/blog-image4.jpg";
import PriorIcon1 from "./img/icons/prioritise-icon1.svg";
import PriorIcon2 from "./img/icons/prioritise-icon2.svg";
import PriorIcon3 from "./img/icons/prioritise-icon3.svg";
import PriorIcon4 from "./img/icons/prioritise-icon4.svg";
function App() {
  const data = {
    mainMenu: [
      { name: "Black", foto: Black },
      { name: "Green", foto: Green },
      { name: "White", foto: White },
      { name: "Oolong", foto: Oolong },
      { name: "Pu-erh", foto: Puerh },
    ],
    userActions: [{ url: Cart }, { url: User }, { url: Search }],
	  mobileMenu: {
		  mainMenu: ["Contact Us", "Our Blog", "Shipping and Delivery"],
		  footerMenu: ['About Us','FAQ','Refund policy','Terms of Service']},
    titleText: {
      mainTitle: "A cup of tea is a moment of calm in the chaos of life",
      assortmentTitle: "Explore our Collections",
      revievsTitle: "What our Clients say",
      blogTitle: "Our Tea Blog",
      knowMoreTitle: "Want to know more?",
      prioriticeTitle: "We Prioritise",
    },
    paragraphTitle:
      "Wide selection of high-quality teas from all over the world, carefully curated by tea experts.",
    bloquoteText:
      "Tea is not just a drink, it's a way of life and a way to connect withour loved ones.",
    reviewsData: [
      {
        review:
          "As a tea enthusiast, I have tried teas from all over the world, but this tea store truly stands out. Their teas are of the highest quality and the variety is impressive. This is definitely a tea store that every tea lover should visit.",
        author: "Alice",
      },
      {
        review:
          "This tea store is my go-to for all my tea needs. Their selection is unbeatable and the quality of their teas is exceptional.",
        author: "Mad-Hatter",
      },
      {
        review:
          "If you're a tea lover, you must visit this tea store. The selection is vast and the quality is outstanding. I guarantee you won't be disappointed.",
        author: "Dormouse",
      },
      {
        review:
          "I am not a big tea drinker, but this tea store has converted me. I highly recommend this tea store to anyone looking for a high-quality tea experience.",
        author: "March Hare",
      },
    ],
    postData: [
      {
        postTitle: "Tea Time Travels: Funny Moments from Around the World",
        postAuthor: "Robinson Crusoe",
        postImage: PostImage1,
        postContent: "",
        url: "",
      },
      {
        postTitle: "Tea-rific Tales: Hilarious Stories from Tea Lovers",
        postAuthor: "Casper the Friendly Ghost",
        postImage: PostImage2,
        postContent: "",
        url: "",
      },
      {
        postTitle: "The Role of Tea in Mental Health",
        postAuthor: "Joker",
        postImage: PostImage3,
        postContent: "",
        url: "",
      },
      {
        postTitle: "Tea and Caffeine: Effects on the Brain and Behavior",
        postAuthor: "Author Authorius",
        postImage: PostImage4,
        postContent: "",
        url: "",
      },
    ],
    knowMoreDataText:
      "Join our mailing list and stay up-to-date with the latest news, promotions, and exclusive offers from our tea store. Be the first to know about new tea arrivals, seasonal blends, and special discounts. Don't miss out on the tea-rrific perks - sign up today!",
    prioritiseDataList: [
      {
        title: "Single garden teas",
        subtitle: "Complete transparency",
        icon: PriorIcon1,
      },
      {
        title: "Only Loose leaf tea",
        subtitle: "Best Drinking Experience",
        icon: PriorIcon2,
      },
      {
        title: "Customer support",
        subtitle: "No bots, no automated replies",
        icon: PriorIcon3,
      },
      {
        title: "Fast shipping",
        subtitle: "Save, Convenient, Reliable",
        icon: PriorIcon4,
      },
	  ],
	  footerData: {
		  footerBloqoute: {
			  author: "Dragomir Teodorescu, Tealuxe owner",
			  text:"Tea is a journey. It can take you to new places and open your mind to new experiences. Let every sip transport you to a world of wonder and possibility"
		  },
		  footerInstruction: "Please feel free to contact us via the email of phone. We would be happy to hear from you! ",
		  contacts: {
			  phone: {
				  number: "+370 680 12345",
				  url:"#"
			  },
			  email: {
				  number: "info@tealuxe.com",
				  url:"#"
			  }
		  }
	  }
  };

  return (
    <div className="App">
      <Header
        dataMenu={[data.mainMenu, data.mobileMenu, data.userActions]}
      ></Header>
      <Main
        dataText={[
          data.titleText,
          data.paragraphTitle,
          data.bloquoteText,
          data.mainMenu,
          data.reviewsData,
          data.postData,
          data.knowMoreDataText,
          data.prioritiseDataList,
        ]}
      ></Main>
		  <Footer dataFooter={[data.mainMenu,data.mobileMenu,data.footerData] }></Footer>
    </div>
  );
}

export default App;
