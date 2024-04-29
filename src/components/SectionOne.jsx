import '../App.css';

function SectionOne() {
  return (
    <div className="sectionOne">
    <div className="navbar">
        <div className="logo">
            <img src="../assets/Images/hellochefLogo.png" alt="Logo of Hello Chef" width="100px" height="auto"/>
        </div>
        <div className="navigation">
            <ul>
                <li>Our Plans</li>
                <li>Weekly Menu</li>
                <li>How It Works</li>
                <li className="signIn">Sign In</li>
            </ul>
        </div>
    </div>
    <div className="banner">
        <div className="bannerText">
            <h1> Say hello to a new way of cooking </h1>
            <p> 
                Delicious recipes. Delivered by us, made by you. Ready to unbox mealtime?
            </p>
            <button>
                Get Started
            </button>
        </div>
    </div>
</div>
);
}

export default SectionOne;



