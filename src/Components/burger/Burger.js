import './burger.css'


const Burger = () => (
	<div class="burger">
              <button
                className="menu__btn"
                type="button"
                name="button__burger"
                aria-label="button"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
);
export default Burger;