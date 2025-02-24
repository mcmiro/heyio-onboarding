import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative z-40">
      <Link href="/">
        <Image
          src="/logo/heyio-logo.svg"
          width={109}
          height={44}
          alt="Reinholz Logo"
          className=""
        />
      </Link>
    </div>
  );
};

export default Logo;
