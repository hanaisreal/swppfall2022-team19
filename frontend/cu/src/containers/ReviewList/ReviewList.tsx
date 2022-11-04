import { useState } from 'react';
import "./ReviewList.css";
import Review from "../../components/Review/Review";

interface IProps{
    title:string;
}

type ReviewType={
    id: number;
    username:string;
    totalScore: number;
    content: string;
    likedCount: number;
    liked: boolean;
}

export default function ReviewList (props: IProps){
    const {title} = props;

    const [ reviews, setReviews ] = useState<ReviewType[]>([
        { id: 1, username: "worm", totalScore: 5, content: "one of my best dosirak", likedCount:5, liked: true },
        { id: 2, username: "sikdorak", totalScore: 5, content: "best of all", likedCount:5, liked: true},
        { id: 3, username: "idi", totalScore: 5, content: "not what I expected",likedCount:2, liked: true },
        { id: 4, username: "yammy", totalScore: 5, content: "ugh", likedCount:1, liked: true },
        { id: 5, username: "swpp", totalScore: 5, content: "pretty nice, worth the price", likedCount:5,  liked: false },
    ]);
    
    return (
        <div className="ReviewList"> 
            <div className='title'>{title}</div>
            <div className='views'>
                {reviews.map( (rv) => {
                    return (
                    <Review 
                        key={rv.id}
                        username={rv.username}
                        totalScore={rv.totalScore}
                        content={rv.content}
                        likedCount={rv.likedCount}
                        liked={rv.liked}
                    />
                );})}
            </div>
        </div> 
    )
}
