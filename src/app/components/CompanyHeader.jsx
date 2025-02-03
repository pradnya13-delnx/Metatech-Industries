'use client';

import Image from 'next/image';
import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa6';
import { ImMail4 } from 'react-icons/im';
import { TfiLocationPin } from "react-icons/tfi";
import Drawer from './Drawer';

const CompanyHeader = () => {

    const IconTexts = ({ icon: Icon, text1, text2 }) => {
        return (
            <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="text-blue-600">
                    <Icon size={24} />
                </div>

                {/* Texts */}
                <div className="flex flex-col items-start">
                    <span className="text-xs md:text-base font-medium text-white phone:hidden">{text1}</span>
                    <span className="text-sm md:text-lg font-semibold text-white phone:hidden">{text2}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full p-4">
            <div className='flex flex-row phone:flex-col items-center justify-between '>
                {/* Logo */}
                <a href="/#">
                <div className="bg-white p-4 rounded-lg phone:flex-row phone:justify-between">
                    <Image
                        src="/images/metatech_logo.png"
                        width={200}
                        height={85}
                        alt="Metatech Industries"
                    />
                    <Drawer />
                </div>
                </a>

                {/* Contact Info */}
                <div className="flex flex-row items-center justify-center md:space-x-8 space-y-4 md:space-y-0">
                    <IconTexts
                        icon={FaPhoneVolume}
                        text1="Call Us"
                        text2="22-33-44-55"
                    />
                    <IconTexts
                        icon={ImMail4}
                        text1="Contact"
                        text2="metatechind@domain.com"
                    />
                    <IconTexts
                        icon={TfiLocationPin}
                        text1="Location"
                        text2="Narayan Peth, Cosmos Bank Building"
                    />
                </div>
            </div>
        </div>
    );
}

export default CompanyHeader;
