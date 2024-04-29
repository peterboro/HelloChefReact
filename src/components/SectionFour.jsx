import '../App.css';

function SectionFour() {
  return (
    <div className="sectionFour">
    <h2> Ready to cook healthy & inspiring meals? </h2>
    <p>
            Choose from 24+ recipes every week - from light, low-calorie dishes to hearty, family favourites. Look out for our handy recipe tags to make choosing even simpler.
    </p>

    <div className="menu">
        <div className="menu-item vegan">
            <span> Vegan </span>
        </div>

        <div className="menu-item weekly-classic">
            <span> WeeklyClassic </span>
        </div>

        <div className="menu-item vegetarian">
            <span> Vegetarian </span>
        </div>
    </div>

    <button>View Menu</button>
</div>
  );}

export default SectionFour;