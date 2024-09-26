import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      <p className="text-center text-[54px] mt-10 text-[#161010] font-bold">
        About Us
      </p>
      <div className=" hidden lg:block p-20 space-y-6">
        <div className="grid grid-cols-7  ">
          <div className="flex flex-col col-span-2">
            <img src="/images/h-b1.svg" width={300} height={300} />
          </div>
          <p className="text-[#161010] col-span-5">
            At Visitation Book, we believe that every farewell deserves to be
            remembered with dignity, ease, and accessibility. Founded on the
            idea that honouring a loved one should not be burdened by logistical
            challenges, we set out to revolutionize the way people gather,
            share, and cherish memories during life's most profound moments.
            <br />
            <br /> Our journey began with a simple yet powerful vision: to
            transform the traditional visitation book into a digital experience
            that not only preserves memories but also connects people in ways
            that paper never could. We understood that in today's world, the
            need for a solution that transcends physical boundaries was more
            important than ever. Thus, Visitation Book was born-a digital
            visitation book designed for the modern age, offering a seamless way
            for families and friends to come together, no matter where they are.
            <br /> <br /> Our platform allows attendees to leave heartfelt
            messages, share cherished photos, and contribute stories from
            anywhere in the world, creating a lasting tribute that can be
            revisited long after the service has ended. By moving to a digital
            format, we eliminate the need for physical materials, reducing waste
            and ensuring that every memory is captured in a way that's both
            beautiful and sustainable.
          </p>
        </div>
        <div className="grid grid-cols-7 mt-3 ">
          <div className="flex flex-col col-span-2">
            <img src="/images/h-b2.svg" width={300} height={300} />
          </div>

          <p className="text-[#161010] col-span-5">
            But more than just technology, Visitation Book is about compassion.
            We know that saying goodbye is never easy, and we are committed to
            providing a service that is both simple to use and deeply respectful
            of the emotions involved.Our team is dedicated to making this
            process as smooth as possible, so families can focus on what truly
            matters-honouring the life of their loved one.
            <br /> <br /> At Visitation Book, we're not just creating a product;
            we're building a bridge to connect hearts and minds across
            distances, ensuring that every memory is preserved with the care it
            deserves. Whether it's a close-knit gathering or a service with
            guests from around the globe, our digital visitation books are here
            to help you remember, share, and celebrate the lives of those who
            have touched our hearts.
            <br /> <br /> <br />
            Visitation Book-because every memory deserves a place to be
            cherished forever.
          </p>
        </div>
      </div>
      <div className="lg:hidden p-20 space-y-6">
        <div className="grid grid-cols-1  ">
          <div className="flex flex-col justify-center gap-5 mx-auto">
            <div>
              <img src="/images/h-b1.svg" width={300} height={300} />
            </div>

            <div>
              <img src="/images/h-b2.svg" width={300} height={300} />
            </div>
          </div>
          <p className="text-[#161010] col-span-5">
            At Visitation Book, we believe that every farewell deserves to be
            remembered with dignity, ease, and accessibility. Founded on the
            idea that honouring a loved one should not be burdened by logistical
            challenges, we set out to revolutionize the way people gather,
            share, and cherish memories during life's most profound moments.
            <br />
            <br /> Our journey began with a simple yet powerful vision: to
            transform the traditional visitation book into a digital experience
            that not only preserves memories but also connects people in ways
            that paper never could. We understood that in today's world, the
            need for a solution that transcends physical boundaries was more
            important than ever. Thus, Visitation Book was born-a digital
            visitation book designed for the modern age, offering a seamless way
            for families and friends to come together, no matter where they are.
            <br /> <br /> Our platform allows attendees to leave heartfelt
            messages, share cherished photos, and contribute stories from
            anywhere in the world, creating a lasting tribute that can be
            revisited long after the service has ended. By moving to a digital
            format, we eliminate the need for physical materials, reducing waste
            and ensuring that every memory is captured in a way that's both
            beautiful and sustainable.
          </p>
          <p className="text-[#161010] col-span-5">
            But more than just technology, Visitation Book is about compassion.
            We know that saying goodbye is never easy, and we are committed to
            providing a service that is both simple to use and deeply respectful
            of the emotions involved.Our team is dedicated to making this
            process as smooth as possible, so families can focus on what truly
            matters-honouring the life of their loved one.
            <br /> <br /> At Visitation Book, we're not just creating a product;
            we're building a bridge to connect hearts and minds across
            distances, ensuring that every memory is preserved with the care it
            deserves. Whether it's a close-knit gathering or a service with
            guests from around the globe, our digital visitation books are here
            to help you remember, share, and celebrate the lives of those who
            have touched our hearts.
            <br /> <br /> <br />
            Visitation Book-because every memory deserves a place to be
            cherished forever.
          </p>
        </div>
      </div>
    </div>
  );
}
