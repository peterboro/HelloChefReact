import '../App.css'; 

function SectionTwo() {
  return (
    <div className="sectionTwo">
    <h2>
        Why Choose Us?
    </h2>
    <p>
        Eat well for less with impressively easy meals starting from AED 35 per serving.
    </p>
    <div className="content">
        <div className="principle convenience">
            <div className="image"></div>
            <div className="imageDescription">
                <h3> Convenience </h3>
                <p>
                    <i className="fa-solid fa-check"></i>
                    Pre-measured ingredients & easy recipes
                </p>    
                <p>
                    <i className="fa-solid fa-check"></i>
                    Contactless, doorstep delivery across UAE
                </p>
                <p>
                    <i className="fa-solid fa-check"></i>
                    Skip a delivery or cancel anytime
                </p>
            </div>
        </div>
        <div className="principle variety">
            <div className="image"></div>
            <div className="imageDescription">
                <h3> Variety </h3>
                <p> 
                    <i className="fa-solid fa-check"></i>
                    New recipes every week
                </p>
                <p>
                    <i className="fa-solid fa-check"></i>
                    24+ dishes to choose from
                </p>
                <p>
                    <i className="fa-solid fa-check"></i>
                    Low-calorie & family-friendly options
                </p>
            </div>
        </div>
        <div className="principle deliciousness">
            <div className="image"></div>
            <div className="imageDescription">
                <h3> Deliciousness </h3>
                <p>
                    <i className="fa-solid fa-check"></i>
                    No skimpin' on the portion size!
                </p>
                <p>
                    <i className="fa-solid fa-check"></i>
                    100% satisfaction guarantee, or we will make it right
                </p>
                <p>
                    <i className="fa-solid fa-check"></i>
                    Fresh ingredients from local, trusted supplier
                </p>
            </div>
        </div>

    </div>
</div>

  );}

export default SectionTwo;