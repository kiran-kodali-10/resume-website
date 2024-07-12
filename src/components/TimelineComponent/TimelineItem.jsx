import '../../App.scss'


const calculateHeight = (startYear, endYear)=>{
    const minHeightPerYear = 40;
    const duration = endYear - startYear;
    return Math.max(duration * minHeightPerYear, minHeightPerYear);
};

const TimelineItem = ({ data }) => {
    const {startYear, endYear} = data;
    const itemHeight = calculateHeight(startYear, endYear);
    return (
        <div className="timeline-item" >
            {/* <div className="timeline-dot" ></div> */}
            <div className="timeline-content">
                <span className="timeline-date">{data.date}</span>
                <h3>{data.title}</h3>
                <h4>{data.company}</h4>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default TimelineItem;