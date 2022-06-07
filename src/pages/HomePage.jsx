import { Component } from "react";
import UserService from "../services/UserService.service";
import BitcoinService from "../services/BitcoinService.service";
import HomePageImage from "../../src/assets/img/home-page-img.svg";
import { connect } from "react-redux";
import { signup, getLoggedinUser } from "../store/actions/userActions";

class _HomePage extends Component {
  state = {
    rate: null,
  };

  async componentDidMount() {
    await this.props.getLoggedinUser();
  }

  getRate = async (coins) => {
    const rate = await BitcoinService.getRate(coins);
    this.setState({ rate });
  };

  render() {
    const { user } = this.props;
    const { rate } = this.state;
    if (user && !rate) this.getRate(user.coins);
    if (!user || !rate) return <div>Loading...</div>;

    return (
      <section className="home-page">
        <div className="container">
          <h1>Hello {user.name}!</h1>
          <h5>Coins: {user.coins}</h5>
          <h5>Bitcoin rate: {rate}</h5>
        </div>
        <div className="image-container">
          <img src={HomePageImage} alt="home-page-image" />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userModule.loggedInUser,
  };
};

const mapDispatchToProps = {
  signup,
  getLoggedinUser,
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage);
