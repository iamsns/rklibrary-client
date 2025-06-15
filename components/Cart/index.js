import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { bindActionCreators } from "redux";
import CartModal from "./components/cartModal"
// import { closeCart, openCart } from "./redux/actions"
// import { selectIsCartOpen } from "./redux/selectors";

const Cart = ({isCartOpen, closeCart}) => {
    return null
}


const mapStateToProps = createStructuredSelector({
    // isCartOpen : selectIsCartOpen()
})
const mapDispatchToProps = dispatch => ({
//   openCart : bindActionCreators(openCart, dispatch ),
//   closeCart : bindActionCreators(closeCart, dispatch ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);