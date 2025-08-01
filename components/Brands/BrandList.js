"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

import brandImg1 from "../../public/images/brand/xange.png";
import brandImg2 from "../../public/images/brand/reench.png";
import brandImg3 from "../../public/images/brand/tcm.png";
import brandImg4 from "../../public/images/brand/stack.png";
import brandImg5 from "../../public/images/brand/eido.png";
import brandImg6 from "../../public/images/brand/cmp.png";

const BrandList = () => {
  var settings = {
    centerMode: true,
    draggable: false,
    centerPadding: "150px",
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className="brand-list brand-style-2 slider-brand slider-brand-activation"
      >
        <li className="slide-single-layout">
          <Link href="https://www.xange.vc/" target="_blank">
            <Image
              src={brandImg1}
              width={132}
              height="auto"
              alt="Brand Image"
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="https://reench.com/" target="_blank">
            <Image
              src={brandImg2}
              width={132}
              height="auto"
              alt="Brand Image"
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="https://thecodingmachine.com/" target="_blank">
            <Image
              src={brandImg3}
              width={110}
              height="auto"
              alt="Brand Image"
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="https://www.linkedin.com/company/stack-48" target="_blank">
            <Image
              src={brandImg4}
              width={165}
              height="auto"
              alt="Brand Image"
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="https://www.collective.work/collective/eido" target="_blank">
            <Image
              src={brandImg5}
              width={132}
              height="auto"
              alt="Brand Image"
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="https://www.groupecmp.com/" target="_blank">
            <Image
              src={brandImg6}
              width={151}
              height="auto"
              alt="Brand Image"
            />
          </Link>
        </li>
      </Slider>
    </>
  );
};

export default BrandList;
