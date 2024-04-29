import '../App.css';

function SectionFive() {
  return (
    <section className="sectionFive">
    <h2>
        <img src="Images/instagram.webp" alt="" />
        #hellochef
    </h2>

    <div className="users">
        <div className="user one"></div>
        <div className="user two"></div>
        <div className="user three"></div>
        <div className="user four"></div>
    </div>

    <p>
        Over
        <span>
            3 million meals
        </span>
    </p>

    <p> Cooked and loved by our customers </p>
    <p>
        4.9
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
        350+ reviews on
        <img src="./Images/google.webp" alt="" />
    </p>

    <div className="sectFive">
        <img src="./Images/LOGOBCORP-removebg-preview.png" alt="" width="100px" height="80px" />
        <p>
            <strong> Hello Chef is a certified </strong>
            <span className="corp">
                B Corp!
            </span>
            <span className="new">
                New
            </span>
            <br />
            We're proud to join a global movement of companies using business as a force for good.
            <span className="learn">
                Learn More
            </span>
        </p>
        <img src="./Images/Bcorp2.png" alt="" />
    </div>
</section>

  );}

export default SectionFive;