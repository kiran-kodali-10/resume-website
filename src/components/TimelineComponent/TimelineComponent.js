import TimelineItem from "./TimelineItem";
import  '../../App.scss'

// Timeline reusable component.
function Timeline({events}){

    return(
        <div className="timeline-container">
            {
                events.map((event, idx)=>(
                    <TimelineItem key={idx} data={event} />
                ))
            }
        </div>
    )

}

export default Timeline;