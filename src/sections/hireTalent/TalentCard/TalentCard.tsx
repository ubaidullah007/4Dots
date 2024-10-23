import { Button } from "@/components/Button/Button";
import { Card } from "@/components/card/Card";
import GeneralHeading from "@/components/Heading/GeneralHeading";
import SubHeading from "@/components/Heading/SubHeading";
import Text from "@/components/Text/Text";
import style from "./TalentCard.module.css"
import Image from "next/image";
import React, { useState } from "react";
import { TALENT_DATA } from "./TalentCardData";
import Link from "next/link";

const TalentCard = () => {
    const [visibleCards, setVisibleCards] = useState(3);
    const showMoreCards = () => {
        setVisibleCards(visibleCards + 3); // Increase the visible cards by 3 on clicking "View More"
    };
    return (
        <div className="py-[100px]">
            <div className="container">
            <SubHeading className={'text-center mb-[8px]'} subHeading={'Top Talent'} />
            <GeneralHeading className={'text-center max-w-[900px] mx-auto mb-[8px]'} heading={'Leverage The Expertise of Available Developers'} />
            <Text text={'Our developers utilise best-in-class tools, state-of-the-art technologies and updated approaches to uplift your business.'} className="text-grey text-center mb-[60px]"/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]  mt-[60px]">
                    {TALENT_DATA.slice(0, visibleCards).map((data, index) => {
                        return (
                            <Card id='meetNow' className={`hover:bg-black hover:shadow-lg ${style.TalentCard}` } key={index} >
                                
                                <h5 className={`mb-[12px] font-poppins text-2xl text-center text-primary-dark  font-semibold ${style.talenterName}`}>
                                    {data.name}
                                </h5>
                                <p className={`text-purple text-center font-poppins text-lg font-normal mb-[12px] ${style.talenterPosition}`}>
                                    {data.position}
                                </p>
                                <p className={`text-grey font-poppins text-center text-lg font-normal mb-[32px] ` }>
                                    {data.description}
                                </p>
                                <Button  className="bg-primary text-white font-poppins text-base items-center justify-center hover:shadow-custom-button hover:translate-y-[-3px] w-full		flex gap-3 py-[16px] px-[24px] font-bold	capitalize rounded-lg">
                                    <Link href={'/contact'}>
                                    
                                    Hire Now
                                    </Link>
                                </Button>
                            </Card>
                        );
                    })}
                </div>
                { ( // Show "View More" button only if there are more cards to display
                <div className="flex justify-center mt-6"onClick={showMoreCards}>
                    <Button
                       disabled={visibleCards > TALENT_DATA.length}  className="bg-white text-purple border border-purple font-poppins text-base items-center justify-center hover:shadow-custom-button hover:translate-y-[-3px] flex py-[16px] px-[29px] font-bold capitalize rounded-lg"
                        
                    >
                        View More
                    </Button>
                </div>
            )}

        
            </div>
        </div>
    );
};

export default TalentCard;
