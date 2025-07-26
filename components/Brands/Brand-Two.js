import Image from "next/image";
import React from "react";
import Link from "next/link";

import b1 from "../../public/images/brand/tcm.png";
import b2 from "../../public/images/brand/cmp.png";
import b3 from "../../public/images/brand/eido.png";
import b4 from "../../public/images/brand/reench.png";
import b5 from "../../public/images/brand/stack.png";
import b6 from "../../public/images/brand/xange.png";

const BrandTwo = () => {
  const w = 150;
  const h = 40;

  return (
    <>
      <div className="row">
        <div className="col-lg-12 mt--10">
          <ul className="brand-list brand-style-2 flex items-center justify-center">
            {[b1, b2, b3, b4, b5, b6].map((brand, index) => (
              <li key={index}>
                <Link href="#">
                  <Image
                    src={brand}
                    width={w}
                    height={h}
                    alt="Brand Image"
                    style={{ opacity: 0.45 }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BrandTwo;
