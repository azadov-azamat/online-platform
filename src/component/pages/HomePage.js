import React from "react";
import NavbarJs from "../NavbarJs";
import ExplanationJs from "../ExplanationJs";
import CourseCards from "../CourseCards";
import SpecialtyJs from "../SpecialtyJs";
import ChanceJs from "../ChanceJs";
import MentorJs from "../MentorJs";
import PartnerJs from "../PartnerJs";
import NewsLetterJs from "../NewsLetterJs";
import FooterJs from "../FooterJs";

export default function HomePage() {
    return (
        <>
            <NavbarJs/>
            <ExplanationJs/>
            <CourseCards/>
            <SpecialtyJs/>
            <ChanceJs/>
            <MentorJs/>
            <PartnerJs/>
            <NewsLetterJs/>
            <FooterJs/>
        </>
    )
}