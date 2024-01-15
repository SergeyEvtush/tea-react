import { Component } from "react";

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
import Logo from "./img/icons/logo.svg";
import User from "./img/icons/user.svg";
import Mail from "./img/icons/icon-mail.svg";
import Phone from "./img/icons/icon-phone.svg";
import Gray from "./img/icons/gpay.svg";
import MasterCard from "./img/icons/mastercard.svg";
import Visa from "./img/icons/visa.svg";
import PayPal from "./img/icons/paypal.svg";
import FaceBook from "./img/icons/icon-facebook.svg";
import Twitter from "./img/icons/icon-twitter.svg";
import YouTube from "./img/icons/icon-youtube.svg";
import Square from "./img/icons/icon-square.svg";
import PostImage1 from "./img/postImages/blog-image1.jpg";
import PostImage2 from "./img/postImages/blog-image2.jpg";
import PostImage3 from "./img/postImages/blog-image3.jpg";
import PostImage4 from "./img/postImages/blog-image4.jpg";
import PriorIcon1 from "./img/icons/prioritise-icon1.svg";
import PriorIcon2 from "./img/icons/prioritise-icon2.svg";
import PriorIcon3 from "./img/icons/prioritise-icon3.svg";
import PriorIcon4 from "./img/icons/prioritise-icon4.svg";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        products: [
          { name: "Black", foto: Black },
          { name: "Green", foto: Green },
          { name: "White", foto: White },
          { name: "Oolong", foto: Oolong },
          { name: "Pu-erh", foto: Puerh },
        ],
        mainMenu: [
          { name: "Our products", url: "#" },
          { name: "Reviews", url: "#" },
          { name: "Our Blog", url: "#" },
          { name: "Contact Us", url: "#" },
          { name: "Prioritise", url: "#" },
          { name: "Socials", url: "#" },
        ],
        userActions: [{ url: Cart }, { url: User }, { url: Search }],
        mobileMenu: {
          subMenu: [
            { name: "Shipping and Delivery", url: "#" },
            { name: "About Us", url: "#" },
            { name: "FAQ", url: "#" },
            { name: "Refund policy", url: "#" },
            { name: "Terms of Service", url: "#" },
          ],
        },
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
            postContent:
              "Мы серьезно относимся к вашей конфиденциальности и обязуемся защищать вашу личную информацию. Подписываясь на нашу рассылку, вы даете согласие на периодическое получение от нас электронных писем о наших продуктах, рекламных акциях и другой информации, связанной с чаем.",
            url: "#",
				  visible: false,
				id:1
          },
          {
            postTitle: "Tea-rific Tales: Hilarious Stories from Tea Lovers",
            postAuthor: "Casper the Friendly Ghost",
            postImage: PostImage2,
            postContent:
              "Мы серьезно относимся к вашей конфиденциальности и обязуемся защищать вашу личную информацию. Подписываясь на нашу рассылку, вы даете согласие на периодическое получение от нас электронных писем о наших продуктах, рекламных акциях и другой информации, связанной с чаем.",
            url: "#",
				 visible: false,
				id:2
          },
          {
            postTitle: "The Role of Tea in Mental Health",
            postAuthor: "Joker",
            postImage: PostImage3,
            postContent:
              "Мы серьезно относимся к вашей конфиденциальности и обязуемся защищать вашу личную информацию. Подписываясь на нашу рассылку, вы даете согласие на периодическое получение от нас электронных писем о наших продуктах, рекламных акциях и другой информации, связанной с чаем.",
            url: "#",
				 visible: false,
				id:3
          },
          {
            postTitle: "Tea and Caffeine: Effects on the Brain and Behavior",
            postAuthor: "Author Authorius",
            postImage: PostImage4,
            postContent:
              "Мы серьезно относимся к вашей конфиденциальности и обязуемся защищать вашу личную информацию. Подписываясь на нашу рассылку, вы даете согласие на периодическое получение от нас электронных писем о наших продуктах, рекламных акциях и другой информации, связанной с чаем.",
            url: "#",
				 visible: false,
				id:4
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
            text: "Tea is a journey. It can take you to new places and open your mind to new experiences. Let every sip transport you to a world of wonder and possibility",
          },
          footerInstruction: {
            content:
              "Please feel free to contact us via the email of phone. We would be happy to hear from you! ",
            header: "Stay In Touch",
          },
          contacts: [
            { name: "phone", number: "+370 680 12345", url: "#", icon: Phone },
            { name: "email", number: "info@tealuxe.com", url: "#", icon: Mail },
          ],
          painment: [
            {
              name: "mastercard",
              url: "#",
              icon: MasterCard,
            },
            {
              name: "visa",
              url: "#",
              icon: Visa,
            },
            {
              name: "gpay",
              url: "#",
              icon: Gray,
            },
            {
              name: "paypal",
              url: "#",
              icon: PayPal,
            },
          ],
          socials: [
            {
              name: "facebook",
              url: "#",
              icon: FaceBook,
            },
            {
              name: "youtube",
              url: "#",
              icon: YouTube,
            },
            {
              name: "square",
              url: "#",
              icon: Square,
            },
            {
              name: "twitter",
              url: "#",
              icon: Twitter,
            },
          ],
        },
        logo: {
          name: "logo",
          url: Logo,
        },
      },
    };
  }

	openText = (id) => { 
		this.setState(({ data }) => { 
			const index = data.findIndex(elem => elem.id === id)
			console.log(index);
			
		})


	}

  render() {
    return (
      <div className="App">
        <Header
          dataMenu={[
            this.state.data.mainMenu,
            this.state.data.mobileMenu,
            this.state.data.userActions,
          ]}
        ></Header>
        <Main
          dataText={[
            this.state.data.titleText,
            this.state.data.paragraphTitle,
            this.state.data.bloquoteText,
            this.state.data.products,
            this.state.data.reviewsData,
            this.state.data.postData,
            this.state.data.knowMoreDataText,
					 this.state.data.prioritiseDataList,
				this.openText
          ]}
        ></Main>
        <Footer
          dataFooter={[
            this.state.data.products,
            this.state.data.mobileMenu,
            this.state.data.footerData,
            this.state.data.logo,
          ]}
        ></Footer>
      </div>
    );
  }
}

export default App;
