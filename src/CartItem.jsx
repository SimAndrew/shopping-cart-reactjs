import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from './Context.jsx';

const CartItem = ({ id, img, title, price, amount }) => {
	const { remove, increase } = useGlobalContext();

	return (
		<article className="cart-item">
			<img src={img} alt={title} />

			<div>
				<h5>{title}</h5>
				<span className="item-price">${price}</span>

				<button className="remove-btn" onClick={() => remove(id)}>
					remove
				</button>
			</div>

			<div>
				<button className="amount-btn" onClick={() => increase(id)}>
					<FaChevronUp className="amount-icon" />
				</button>

				<span className="amount">{amount}</span>

				<button className="amount-btn" onClick={() => console.log('decrease')}>
					<FaChevronDown className="amount-icon" />
				</button>
			</div>
		</article>
	);
};

export default CartItem;
