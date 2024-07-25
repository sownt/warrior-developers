'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
import logo_white from '@/public/logo_white.png';
import hero from '@/public/hero/home_hero.svg';
import hero_dark from '@/public/hero/home_hero_dark.svg';
import x from '@/public/x.svg';
import linkedin from '@/public/linkedin.svg';
import facebook from '@/public/facebook.svg';
import mascot from '@/public/mascot.png';
import banner from '@/public/banner.png';
import gdgcloudhanoi from '@/public/gdgcloudhanoi.png';
import gdgcloudhanoi_colorful from '@/public/gdgcloudhanoi_colorful.png';
import via from '@/public/via.png';
import ptit from '@/public/ptit.png';
import fci from '@/public/fci.png';
import gdg from '@/public/gdg.png';
import banner_mobile from '@/public/banner_mobile.png';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import {
  TicketIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';

type Inputs = {
  phone: string;
  email: string;
  first: string;
  last: string;
  gender: number;
  birth: Date;
  job_title: string;
  attendee: number;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  let [isOpen, setIsOpen] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  function open() {
    setIsOpen(true);
  }

  function close() {
    reset();
    setIsOpen(false);
  }

  let [isErrorOpen, setIsErrorOpen] = useState(false);

  function openError() {
    setIsErrorOpen(true);
  }

  function closeError() {
    setIsErrorOpen(false);
  }

  let [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async () => {
    setLoading(true);
    try {
      let res = await fetch(
        `https://warrior.gdgcloudhanoi.dev/register?email=${watch(
          'email'
        )}&first=${watch('first')}&last=${watch('last')}&birth=${watch(
          'birth'
        )}&gender=${watch('gender')}&job_title=${watch(
          'job_title'
        )}&phone=${watch('phone')}&attendee=${watch('attendee')}`
      );
      if (!res.ok) {
        // alert("Đã xảy ra lỗi, vui lòng liên hệ BTC để được hỗ trợ!");
        openError();
        return;
      }
      open();
    } finally {
      setLoading(false);
    }
    // alert("Đăng ký thành công!");
    // let resJson = await res.json();
    // console.log(resJson);
  };

  return (
    <div className="relative isolate flex flex-col min-h-svh w-full z-0 bg-white lg:bg-zinc-100 dark:bg-zinc-950">
      <div className="inset-x-0 top-0 dark:text-white">
        <nav className="mx-auto max-w-6xl px-8 flex flex-1 items-center gap-8 py-2.5">
          <Link href={'/'}>
            <span className="relative">
              <Image
                className="dark:hidden w-32 lg:w-64"
                src={logo}
                alt="Google I/O Extended Cloud Hanoi 2024"
              />
              <Image
                className="hidden dark:inline w-32 lg:w-64"
                src={logo_white}
                alt="Google I/O Extended Cloud Hanoi 2024"
              />
            </span>
          </Link>
          <div className="-ml-4 flex-1"></div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
      <main>
        <div className="mx-auto max-w-6xl flex flex-col md:mt-16 md:flex-row overflow-hidden bg-grey-bg dark:bg-grey">
          <div className="flex flex-col md:justify-center px-8 py-16 w-full md:w-3/5 md:p-10 md:pr-0 dark:text-white z-10 text-center md:text-left items-center md:items-start">
            <h1 className="text-2xl sm:text-4xl font-semibold mb-4 sm:s-h3 md:l-h1-2">
              Tham gia ngay đấu trường Warrior Developers
            </h1>
            <p className="font-normal text-justify sm:s-h6 md:l-h6 mb-4">
              tại ngày hội công nghệ Google I/O Extended Cloud Hanoi 2024 để
              nâng tầm sự nghiệp và kiến tạo tương lai của chính mình, bạn nhé!
            </p>
            <Link href="#register">
              <Button className="transition ease-in-out hover:translate-x-1 hover:scale-105 duration-100 relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.white)]">
                <TicketIcon />
                Đăng ký ngay
              </Button>
            </Link>
          </div>
          <div className="flex justify-end items-end w-full p-8 md:p-0 md:w-3/5 mt-[-55px] md:mt-[60px]">
            <Image
              src={hero}
              alt="Hero image"
              className=" h-full object-cover object-left dark:hidden ml:pr-4"
            />
            <Image
              src={hero_dark}
              alt="Hero image"
              className="hidden dark:inline-block h-full object-cover object-left ml:pr-4"
            />
          </div>
        </div>

        <div className="rounded-4xl bg-neutral-900 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-8">
            <div className="flex items-center gap-x-8">
              <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
                Đồng hành cùng chương trình
              </h2>
              <div className="h-px flex-auto bg-neutral-800"></div>
            </div>
            <div>
              <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-5">
                <li key={1}>
                  <span className="relative">
                    <Image
                      className="w-64"
                      src={gdgcloudhanoi}
                      alt="Google I/O Extended Cloud Hanoi 2024"
                    />
                  </span>
                </li>
                <li key={2}>
                  <span className="relative">
                    <Image
                      className="w-64"
                      src={gdg}
                      alt="Google I/O Extended Cloud Hanoi 2024"
                    />
                  </span>
                </li>
                <li key={3}>
                  <span className="relative">
                    <Image
                      className="w-64"
                      src={fci}
                      alt="Google I/O Extended Cloud Hanoi 2024"
                    />
                  </span>
                </li>
                <li key={4}>
                  <span className="relative">
                    <Image
                      className="w-64"
                      src={via}
                      alt="Google I/O Extended Cloud Hanoi 2024"
                    />
                  </span>
                </li>
                <li key={5}>
                  <span className="relative">
                    <Image
                      className="w-64"
                      src={ptit}
                      alt="Google I/O Extended Cloud Hanoi 2024"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="agenda"
          className="mx-auto max-w-6xl px-8 mt-16 lg:mt-24 text-neutral-950 dark:text-gray-50">
          <h2
            id="speakers-title"
            className="font-display text-3xl font-medium tracking-tighter sm:text-4xl">
            Agenda
          </h2>

          <div className="mt-12 flex flex-col gap-8">
            <div className="relative lg:pl-8">
              <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-black stroke-black dark:fill-white dark:stroke-white">
                <path
                  d="M3 0L6 3L3 6L0 3Z"
                  stroke-width="2"
                  stroke-linejoin="round"></path>
              </svg>
              <div className="relative">
                <span className="font-mono text-sm">13:00 - 14:00</span>
                <span className="mt-1.5 block text-xl font-semibold tracking-tight">
                  Check-in & Booth Experience
                </span>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-black stroke-black dark:fill-white dark:stroke-white">
                <path
                  d="M3 0L6 3L3 6L0 3Z"
                  stroke-width="2"
                  stroke-linejoin="round"></path>
              </svg>
              <div className="relative">
                <span className="font-mono text-sm">14:00 - 14:15</span>
                <span className="mt-1.5 block text-xl font-semibold tracking-tight">
                  Khai mạc, Chào mừng
                </span>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-black stroke-black dark:fill-white dark:stroke-white">
                <path
                  d="M3 0L6 3L3 6L0 3Z"
                  stroke-width="2"
                  stroke-linejoin="round"></path>
              </svg>
              <div className="relative">
                <span className="font-mono text-sm">14:15 - 14:40</span>
                <span className="mt-1.5 block text-xl font-semibold tracking-tight">
                  Keynote #1: AI Recap from Google I/O 2024
                </span>
                <span className="text-sm">
                  Anh Dương Nguyễn - Founder của ZenAI, GDE @ML
                </span>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-black stroke-black dark:fill-white dark:stroke-white">
                <path
                  d="M3 0L6 3L3 6L0 3Z"
                  stroke-width="2"
                  stroke-linejoin="round"></path>
              </svg>
              <div className="relative">
                <span className="font-mono text-sm">14:40 - 15:15</span>
                <span className="mt-1.5 block text-xl font-semibold tracking-tight">
                  Keynote #2: Applying Big Data Analytics/AI in the
                  Telecommunication Industry
                </span>
                <span className="text-sm">
                  Chị Nguyễn Trần Ngọc Linh - Giám đốc Trung tâm Phân tích dữ
                  liệu Viettel Telecom
                </span>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-black stroke-black dark:fill-white dark:stroke-white">
                <path
                  d="M3 0L6 3L3 6L0 3Z"
                  stroke-width="2"
                  stroke-linejoin="round"></path>
              </svg>
              <div className="relative">
                <span className="font-mono text-sm">15:15 - 15:50</span>
                <span className="mt-1.5 block text-xl font-semibold tracking-tight">
                  Keynote #3: Semantic layer in data lake to productionize
                  Generative AI application
                </span>
                <span className="text-sm">
                  Anh Minh Tú Trần - Data Scientist @ Techcombank
                </span>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-black stroke-black dark:fill-white dark:stroke-white">
                <path
                  d="M3 0L6 3L3 6L0 3Z"
                  stroke-width="2"
                  stroke-linejoin="round"></path>
              </svg>
              <div className="relative">
                <span className="font-mono text-sm">15:50 - 16:30</span>
                <span className="mt-1.5 block text-xl font-semibold tracking-tight">
                  Các hoạt động diễn ra đồng thời
                </span>
                <div className="relative lg:pl-8 mt-2">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 6 6"
                    className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-slate-800 stroke-slate-800 dark:fill-slate-200 dark:stroke-slate-200">
                    <path
                      d="M3 0L6 3L3 6L0 3Z"
                      stroke-width="2"
                      stroke-linejoin="round"></path>
                  </svg>
                  <span>Networking & Tea Break</span>
                </div>
                <div className="relative lg:pl-8 mt-2">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 6 6"
                    className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-slate-800 stroke-slate-800 dark:fill-slate-200 dark:stroke-slate-200">
                    <path
                      d="M3 0L6 3L3 6L0 3Z"
                      stroke-width="2"
                      stroke-linejoin="round"></path>
                  </svg>
                  <span>Đấu trường Warrior Developers</span>
                </div>
                <div className="relative lg:pl-8 mt-2">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 6 6"
                    className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-slate-800 stroke-slate-800 dark:fill-slate-200 dark:stroke-slate-200">
                    <path
                      d="M3 0L6 3L3 6L0 3Z"
                      stroke-width="2"
                      stroke-linejoin="round"></path>
                  </svg>
                  <span>Phỏng vấn giả lập với HRM</span>
                </div>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-black stroke-black dark:fill-white dark:stroke-white">
                <path
                  d="M3 0L6 3L3 6L0 3Z"
                  stroke-width="2"
                  stroke-linejoin="round"></path>
              </svg>
              <div className="relative">
                <span className="font-mono text-sm">16:30 - 17:05</span>
                <span className="mt-1.5 block text-xl font-semibold tracking-tight">
                  Keynote #4: Exploring Generative AI and Cloud-Powered AI
                  Advancements
                </span>
                <span className="text-sm">
                  PGS. TS. Ngô Xuân Bách - Phó giám đốc Khối Sản phẩm AI, Giám
                  đốc Trung tâm GenAI, FPT Smart Cloud
                </span>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-black stroke-black dark:fill-white dark:stroke-white">
                <path
                  d="M3 0L6 3L3 6L0 3Z"
                  stroke-width="2"
                  stroke-linejoin="round"></path>
              </svg>
              <div className="relative">
                <span className="font-mono text-sm">17:05 - 17:30</span>
                <span className="mt-1.5 block text-xl font-semibold tracking-tight">
                  Phát biểu - Công bố - Trao giải
                </span>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-black stroke-black dark:fill-white dark:stroke-white">
                <path
                  d="M3 0L6 3L3 6L0 3Z"
                  stroke-width="2"
                  stroke-linejoin="round"></path>
              </svg>
              <div className="relative">
                <span className="font-mono text-sm">17:30</span>
                <span className="mt-1.5 block text-xl font-semibold tracking-tight">
                  Group photos & Closing
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          id="info"
          className="mx-auto max-w-6xl px-8 mt-12 lg:mt-24 text-neutral-950 dark:text-gray-50">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
            <div className="flex">
              <Link
                className="relative grow w-full h-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition bg-neutral-50 hover:bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800 sm:p-8"
                href={'https://maps.app.goo.gl/G2hxgtVqWbVGmb5R9'}
                rel="noopener noreferrer"
                target="_blank">
                <article>
                  <MapPinIcon className="w-8" />
                  <p className="mt-6 font-display text-2xl font-semibold ">
                    Học viện Công nghệ Bưu chính Viễn thông
                  </p>
                  <p className="mt-4 text-base">
                    96A Đường Trần Phú, P. Mộ Lao, Hà Đông, Hà Nội
                  </p>
                </article>
              </Link>
            </div>
            <div className="flex">
              <Link
                className="relative grow w-full h-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition bg-neutral-50 hover:bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800 sm:p-8"
                href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Google+I/O+Extended+Cloud+Hanoi+2024&dates=20240727T060000Z/20240727T103000Z&details=Join+us+for+Google+I/O+Extended+Cloud+Hanoi+2024+and+dive+deep+into+the+latest+advancements+in+cloud+technology!&location=Posts+and+Telecommunications+Institute+of+Technology+(PTIT)+-+96A+%C4%90%C6%B0%E1%BB%9Dng+Tr%E1%BA%A7n+Ph%C3%BA+Hanoi,+100000"
                rel="noopener noreferrer"
                target="_blank">
                <article>
                  <CalendarDaysIcon className="w-8" />
                  <p className="mt-6 font-display text-2xl font-semibold">
                    Thứ bảy, 27 tháng 7
                  </p>
                  <p className="mt-4 text-justify text-base">
                    Thêm ngay sự kiện Google I/O Extended Cloud Hanoi 2024 vào
                    Calendar của bạn để tham gia Warrior Developers đúng giờ và
                    không bỏ lỡ các hoạt động thú vị khác!
                  </p>
                </article>
              </Link>
            </div>
          </div>
        </div>

        <div
          id="banner"
          className="mx-auto max-w-6xl px-8 mt-8 lg:mt-12 text-neutral-950 dark:text-gray-50">
          <div className="relative h-full w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline overflow-clip">
            <Image
              src={banner}
              alt="Hero image"
              className="hidden md:inline-block h-full dark:hidden"
            />
            <Image
              src={banner}
              alt="Hero image"
              className="hidden dark:md:inline-block h-full"
            />
            <Image
              src={banner_mobile}
              alt="Hero image"
              className="block md:hidden dark:hidden w-full"
            />
            <Image
              src={banner_mobile}
              alt="Hero image"
              className="hidden dark:inline-block dark:md:hidden w-full"
            />
          </div>
        </div>

        <div
          id="register"
          className="mx-auto max-w-6xl flex flex-col px-8 mt-8 lg:mt-0 text-neutral-950 dark:text-gray-50 md:flex-row">
          <div className="flex justify-center items-center w-full md:w-1/2 mt-[-55px] md:mt-[60px]">
            <Image
              src={mascot}
              alt="Demo"
              className="hidden md:inline-block object-cover object-right dark:hidden ml:pr-4"
            />
            <Image
              src={mascot}
              alt="Demo"
              className="hidden dark:md:inline-block object-cover object-left ml:pr-4"
            />
          </div>
          <div className="flex flex-col md:justify-center pt-16 w-full md:w-1/2 dark:text-white z-10 text-left items-center md:items-start">
            <div className="relative h-full w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
              <div className="grid h-full w-full overflow-hidden place-items-start justify-items-center p-6 py-8 sm:p-8 lg:p-12">
                <form
                  className="flex flex-col w-full max-w-sm space-y-8"
                  onSubmit={handleSubmit(onSubmit)}>
                  <h2 className="text-lg/7 font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base/7 dark:text-white">
                    Đăng ký tham gia
                  </h2>
                  <fieldset className="[&>*+[data-slot=control]]:mt-6 [&>[data-slot=text]]:mt-1">
                    <div className="space-y-4">
                      <div className="flex flex-row space-x-4">
                        <div className="space-y-4">
                          <label
                            htmlFor="last"
                            className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white">
                            Họ
                          </label>
                          <span className="relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10">
                            <input
                              placeholder="Nguyen Van"
                              className={[
                                'relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border bg-transparent data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]',
                                errors.last
                                  ? 'border-red-700 data-[hover]:border-red-700 dark:border-red-700 data-[hover]:dark:border-red-700'
                                  : 'border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 dark:bg-white/5 focus:outline-none data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15',
                              ].join(' ')}
                              {...register('last', {
                                required: 'Vui lòng nhập họ',
                              })}
                            />
                          </span>
                          {/* <span className="select-none text-base/10 text-red-700 data-[disabled]:opacity-50 sm:text-sm/10 dark:text-white">
                            <ErrorMessage errors={errors} name="last" />
                          </span> */}
                        </div>
                        <div className="space-y-4">
                          <label
                            htmlFor="first"
                            className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white">
                            Tên
                          </label>
                          <span className="relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10">
                            <input
                              placeholder="A"
                              className={[
                                'relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border bg-transparent data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]',
                                errors.first
                                  ? 'border-red-700 data-[hover]:border-red-700 dark:border-red-700 data-[hover]:dark:border-red-700'
                                  : 'border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 dark:bg-white/5 focus:outline-none data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15',
                              ].join(' ')}
                              {...register('first', {
                                required: 'Vui lòng nhập tên',
                              })}
                            />
                          </span>
                          {/* <span className="select-none text-base/10 text-red-700 data-[disabled]:opacity-50 sm:text-sm/10 dark:text-white">
                            <ErrorMessage errors={errors} name="first" />
                          </span> */}
                        </div>
                      </div>
                      <div className="mt-3 space-y-4">
                        <label
                          htmlFor="email"
                          className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white">
                          Email
                        </label>
                        <span className="relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10">
                          <input
                            placeholder="nguyenvana@gmail.com"
                            className={[
                              'relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border bg-transparent data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]',
                              errors.email
                                ? 'border-red-700 data-[hover]:border-red-700 dark:border-red-700 data-[hover]:dark:border-red-700'
                                : 'border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 dark:bg-white/5 focus:outline-none data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15',
                            ].join(' ')}
                            {...register('email', {
                              required: 'Vui lòng nhập email.',
                              pattern: {
                                value:
                                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Email không hợp lệ.',
                              },
                            })}
                          />
                        </span>
                        <span className="select-none text-base/10 text-red-700 data-[disabled]:opacity-50 sm:text-sm/10 dark:text-red-500">
                          <ErrorMessage errors={errors} name="email" />
                        </span>
                      </div>
                      <div className="mt-3 space-y-4">
                        <label
                          htmlFor="phone"
                          className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white">
                          Số điện thoại
                        </label>
                        <span className="relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10">
                          <input
                            placeholder="032 1234 123"
                            className={[
                              'relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border bg-transparent data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]',
                              errors.phone
                                ? 'border-red-700 data-[hover]:border-red-700 dark:border-red-700 data-[hover]:dark:border-red-700'
                                : 'border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 dark:bg-white/5 focus:outline-none data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15',
                            ].join(' ')}
                            {...register('phone', {
                              required: 'Vui lòng nhập số điện thoại.',
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Số điện thoại không hợp lệ.',
                              },
                            })}
                          />
                        </span>
                        <span className="select-none text-base/10 text-red-700 data-[disabled]:opacity-50 sm:text-sm/10 dark:text-red-500">
                          <ErrorMessage errors={errors} name="phone" />
                        </span>
                      </div>
                      <div className="mt-3 space-y-4">
                        <label
                          htmlFor="birth"
                          className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white">
                          Ngày sinh
                        </label>
                        <span className="relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10">
                          <input
                            type="date"
                            placeholder="01/01/2001"
                            max={today}
                            className={[
                              'relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border bg-transparent data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]',
                              errors.birth
                                ? 'border-red-700 data-[hover]:border-red-700 dark:border-red-700 data-[hover]:dark:border-red-700'
                                : 'border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 dark:bg-white/5 focus:outline-none data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15',
                            ].join(' ')}
                            {...register('birth', {
                              required: 'Vui lòng chọn',
                            })}
                          />
                        </span>
                        {/* <span className="select-none text-base/10 text-red-700 data-[disabled]:opacity-50 sm:text-sm/10 dark:text-white">
                          <ErrorMessage errors={errors} name="birth" />
                        </span> */}
                      </div>
                      <div className="mt-3 space-y-4">
                        <label
                          htmlFor="gender"
                          className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white">
                          Giới tính
                        </label>
                        <span className="relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10">
                          <select
                            className={[
                              'relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border bg-transparent data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]',
                              errors.gender
                                ? 'border-red-700 data-[hover]:border-red-700 dark:border-red-700 data-[hover]:dark:border-red-700'
                                : 'border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 dark:bg-white/5 focus:outline-none data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15',
                            ].join(' ')}
                            {...register('gender', {
                              required: 'Vui lòng chọn',
                              pattern: /^[012]$/i,
                            })}>
                            <option
                              value=""
                              className="text-zinc-950 dark:text-white bg-white dark:bg-zinc-950">
                              Vui lòng chọn
                            </option>
                            <option
                              className="text-zinc-950 dark:text-white bg-white dark:bg-zinc-950"
                              value="0">
                              Nam
                            </option>
                            <option
                              className="text-zinc-950 dark:text-white bg-white dark:bg-zinc-950"
                              value="1">
                              Nữ
                            </option>
                            <option
                              className="text-zinc-950 dark:text-white bg-white dark:bg-zinc-950"
                              value="2">
                              Khác
                            </option>
                          </select>
                        </span>
                        {/* <span className="select-none text-base/10 text-red-700 data-[disabled]:opacity-50 sm:text-sm/10 dark:text-white">
                          <ErrorMessage errors={errors} name="gender" />
                        </span> */}
                      </div>
                      <div className="mt-3 space-y-4">
                        <label
                          htmlFor="job_title"
                          className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white">
                          Nghề nghiệp
                        </label>
                        <span className="relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10">
                          <input
                            placeholder="Mobile Developer"
                            className={[
                              'relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border bg-transparent data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]',
                              errors.job_title
                                ? 'border-red-700 data-[hover]:border-red-700 dark:border-red-700 data-[hover]:dark:border-red-700'
                                : 'border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 dark:bg-white/5 focus:outline-none data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15',
                            ].join(' ')}
                            {...register('job_title', {
                              required: 'Vui lòng nhập nghề nghiệp',
                            })}
                          />
                        </span>
                      </div>
                      <div className="mt-3 space-y-4">
                        <label
                          htmlFor="attendee"
                          className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white">
                          Bạn đã đăng ký{' '}
                          <a
                            className="font-bold"
                            href="https://gdgcloudhanoi.dev/iox-register">
                            Google I/O Extended Cloud Hanoi 2024
                          </a>{' '}
                          chưa?{' '}
                          <span className="font-light">
                            (Vui lòng đăng ký sự kiện để có thể tham gia phần
                            thì lập trình)
                          </span>
                        </label>
                        <span className="relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10">
                          <select
                            className={[
                              'relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border bg-transparent data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]',
                              errors.attendee
                                ? 'border-red-700 data-[hover]:border-red-700 dark:border-red-700 data-[hover]:dark:border-red-700'
                                : 'border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 dark:bg-white/5 focus:outline-none data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15',
                            ].join(' ')}
                            {...register('attendee', {
                              required: 'Vui lòng chọn',
                              pattern: /^[01]$/i,
                            })}>
                            <option
                              value=""
                              className="text-zinc-950 dark:text-white bg-white dark:bg-zinc-950">
                              Vui lòng chọn
                            </option>
                            <option
                              className="text-zinc-950 dark:text-white bg-white dark:bg-zinc-950"
                              value="1">
                              Đã đăng ký
                            </option>
                            <option
                              className="text-zinc-950 dark:text-white bg-white dark:bg-zinc-950"
                              value="0">
                              Chưa đăng ký
                            </option>
                          </select>
                        </span>
                        {/* <span className="select-none text-base/10 text-red-700 data-[disabled]:opacity-50 sm:text-sm/10 dark:text-white">
                          <ErrorMessage errors={errors} name="gender" />
                        </span> */}
                      </div>
                    </div>
                  </fieldset>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="transition ease-in-out hover:scale-105 duration-100 px-4 py-2 relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.white)]">
                    {loading ? (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <></>
                    )}
                    Nộp đơn
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-12 lg:mt-24 px-16 py-8 bg-zinc-950 flex flex-col lg:flex-row lg:justify-between lg:items-center w-max-full border-t-[1px] md:border-t-2 border-zinc-800">
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-6 text-grey-500 text-[16px] font-medium flex-1">
          <div className="text-2xl font-semibold lg:mr-6 text-grey-500 flex justify-center lg:justify-between w-full lg:w-auto items-center">
            <Image
              className="w-64"
              src={gdgcloudhanoi_colorful}
              alt="GDG Cloud Hanoi"
            />
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-self-end lg:justify-end mt-4 lg:mt-0 text-slate-200">
          <Link
            href="https://www.linkedin.com/company/gdgcloudhanoi"
            className="p-3"
            rel="noopener noreferrer"
            target="_blank">
            <Image className="w-4" src={linkedin} alt="LinkedIn" />
          </Link>
          <Link
            href="https://www.facebook.com/GDGCloudHanoi"
            className="p-3"
            rel="noopener noreferrer"
            target="_blank">
            <Image className="w-4" src={facebook} alt="Facebook" />
          </Link>
          <Link
            href="https://www.twitter.com/GDGCloudHanoi"
            className="p-3"
            rel="noopener noreferrer"
            target="_blank">
            <Image className="w-4" src={x} alt="X.com" />
          </Link>
        </div>
      </footer>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none shadow-2xl"
        onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto shadow-2xl">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-2xl">
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-neutral-950 dark:text-gray-50">
                Đăng ký thành công
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-neutral-950 dark:text-gray-50">
                Chúc mừng bạn đã đăng ký thành công cuộc thi Warrior Developers.
                Hẹn gặp bạn vào ngày diễn ra sự kiện nhé!
              </p>
              <div className="mt-4">
                <Button
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-100 relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.white)]"
                  onClick={close}>
                  Đã hiểu
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={isErrorOpen}
        as="div"
        className="relative z-10 focus:outline-none shadow-2xl"
        onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto shadow-2xl">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-2xl">
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-neutral-950 dark:text-gray-50">
                Đã xảy ra lỗi,
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-neutral-950 dark:text-gray-50">
                Bạn vui lòng liên hệ BTC tại{' '}
                <a
                  className="font-bold"
                  href="https://www.messenger.com/t/697780110667545">
                  đây
                </a>{' '}
                để được hỗ trợ nhé!
              </p>
              <div className="mt-4">
                <Button
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-100 relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.white)]"
                  onClick={closeError}>
                  Đã hiểu
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
