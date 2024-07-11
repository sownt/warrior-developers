'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
import logo_white from '@/public/logo_white.png';
import hero from '@/public/hero/home_hero.svg';
import hero_dark from '@/public/hero/home_hero_dark.svg';
import hero_mobile from '@/public/hero/home_hero_mobile.svg';
import hero_mobile_dark from '@/public/hero/home_hero_mobile_dark.svg';
import googlefordevelopers from '@/public/googlefordevelopers.svg';
import x from '@/public/x.svg';
import linkedin from '@/public/linkedin.svg';
import facebook from '@/public/facebook.svg';
import demos_icon from '@/public/demos_icon.svg';
import demos_icon_dark from '@/public/demos_icon_dark.svg';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import {
  TicketIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';

type Inputs = {
  email: string;
  first: string;
  last: string;
  gender: number;
  birth: Date;
  job_title: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
  } = useForm<Inputs>();

  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true)
  }

  function close() {
    reset()
    setIsOpen(false)
  }

  let [isErrorOpen, setIsErrorOpen] = useState(false);

  function openError() {
    setIsErrorOpen(true)
  }

  function closeError() {
    reset()
    setIsErrorOpen(false)
  }

  const onSubmit: SubmitHandler<Inputs> = async () => {
    let res = await fetch(
      `https://warrior.gdgcloudhanoi.dev/register?email=${watch('email')}&first=${watch(
        'first'
      )}&last=${watch('last')}&birth=${watch('birth')}&gender=${watch(
        'gender'
      )}&job_title=${watch('job_title')}`
    );
    if (!res.ok) {
      // alert("Đã xảy ra lỗi, vui lòng liên hệ BTC để được hỗ trợ!");
      openError();
      return;
    }
    open();
    // alert("Đăng ký thành công!");
    // let resJson = await res.json();
    // console.log(resJson);
  };

  return (
    <div className="relative isolate flex flex-col min-h-svh w-full z-0 bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
      <div className="inset-x-0 top-0 dark:text-white">
        <nav className="mx-auto max-w-6xl px-8 flex flex-1 items-center gap-8 py-2.5">
          <Link href={'/'}>
            <span className="relative">
              <Image
                className="dark:hidden w-64"
                src={logo}
                alt="Google I/O Extended Cloud Hanoi 2024"
              />
              <Image
                className="hidden dark:inline w-64"
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
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row overflow-hidden bg-grey-bg dark:bg-grey">
          <div className="flex flex-col md:justify-center px-8 py-16 w-full md:w-2/5 md:p-10 md:pr-0 dark:text-white z-10 text-center md:text-left items-center md:items-start">
            <h1 className="text-2xl sm:text-4xl font-semibold mb-4 sm:s-h3 md:l-h1-2">
              Cùng tham gia cuộc thi Warrior Developers
            </h1>
            <p className="font-normal text-justify sm:s-h6 md:l-h6 mb-4">
              Diễn ra ngay trong sự kiện Google I/O Extended Cloud Hanoi để nhận
              được những phần quà và cơ hội việc làm hấp dẫn.
            </p>
            <Link href="#register">
              <Button className="transition ease-in-out hover:-translate-y-1 hover:scale-115 duration-100 relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.white)]">
                <TicketIcon />
                Đăng ký ngay
              </Button>
            </Link>
          </div>
          <div className="flex justify-end items-end w-full md:w-3/5 mt-[-55px] md:mt-[60px]">
            <Image
              src={hero}
              alt="Hero image"
              className="hidden md:inline-block h-full object-cover object-left dark:hidden ml:pr-4"
            />
            <Image
              src={hero_dark}
              alt="Hero image"
              className="hidden dark:md:inline-block h-full object-cover object-left ml:pr-4"
            />
            <Image
              src={hero_mobile}
              alt="Hero image"
              className="block md:hidden dark:hidden w-full mt-[60px]"
            />
            <Image
              src={hero_mobile_dark}
              alt="Hero image"
              className="hidden dark:inline-block dark:md:hidden w-full mt-[60px]"
            />
          </div>
        </div>

        <div
          id="info"
          className="mx-auto max-w-6xl px-8 mt-8 lg:mt-12 text-neutral-950 dark:text-gray-50">
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
                    Hội trường A2, Học viện Công nghệ Bưu chính viễn thông
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
                  <p className="mt-4 text-base">
                    Nhấn để thêm ngay vào Calendar của bạn nhé
                  </p>
                </article>
              </Link>
            </div>
          </div>
        </div>

        <div
          id="register"
          className="mx-auto max-w-6xl flex flex-col px-8 mt-8 lg:mt-12 text-neutral-950 dark:text-gray-50 md:flex-row overflow-hidden bg-grey-bg dark:bg-grey">
          <div className="flex justify-center items-center w-full md:w-2/5 mt-[-55px] md:mt-[60px]">
            <Image
              src={demos_icon}
              alt="Demo"
              className="hidden md:inline-block object-cover object-right dark:hidden ml:pr-4"
            />
            <Image
              src={demos_icon_dark}
              alt="Demo"
              className="hidden dark:md:inline-block object-cover object-left ml:pr-4"
            />
          </div>
          <div className="flex flex-col md:justify-center py-16 w-full md:w-3/5 md:p-10 md:pr-0 dark:text-white z-10 text-left items-center md:items-start">
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
                              className="relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 bg-transparent dark:bg-white/5 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500 data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]"
                              {...register('last', { required: true })}
                            />
                          </span>
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
                              className="relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 bg-transparent dark:bg-white/5 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500 data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]"
                              {...register('first', { required: true })}
                            />
                          </span>
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
                            className="relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 bg-transparent dark:bg-white/5 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500 data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]"
                            {...register('email', { required: true })}
                          />
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
                            className="relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 bg-transparent dark:bg-white/5 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500 data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]"
                            {...register('birth', { required: true })}
                          />
                        </span>
                      </div>
                      <div className="mt-3 space-y-4">
                        <label
                          htmlFor="gender"
                          className="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white">
                          Giới tính
                        </label>
                        <span className="relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10">
                          <select
                            className="relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 bg-transparent dark:bg-white/5 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500 data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]"
                            {...register('gender', {
                              required: true,
                              pattern: /^[012]$/i,
                            })}>
                            <option className='text-zinc-950 dark:text-white bg-white dark:bg-zinc-950'>Vui lòng chọn</option>
                            <option className='text-zinc-950 dark:text-white bg-white dark:bg-zinc-950' value="0">Nam</option>
                            <option className='text-zinc-950 dark:text-white bg-white dark:bg-zinc-950' value="1">Nữ</option>
                            <option className='text-zinc-950 dark:text-white bg-white dark:bg-zinc-950' value="2">Khác</option>
                          </select>
                        </span>
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
                            className="relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 bg-transparent dark:bg-white/5 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500 data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]"
                            {...register('job_title', { required: true })}
                          />
                        </span>
                      </div>
                    </div>
                  </fieldset>
                  <Button
                    type="submit"
                    className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-100 relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.white)]">
                    Nộp đơn
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-12 lg:mt-24 px-16 py-8 bg-black flex flex-col lg:flex-row lg:justify-between lg:items-center w-max-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-6 text-grey-500 text-[16px] font-medium flex-1">
          <div className="text-2xl font-semibold lg:mr-6 text-grey-500 flex justify-center lg:justify-between w-full lg:w-auto items-center">
            <Image
              className="w-32"
              src={googlefordevelopers}
              alt="Google for Developers"
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
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none shadow-2xl" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto shadow-2xl">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-2xl"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-neutral-950 dark:text-gray-50">
                Đăng ký thành công
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-neutral-950 dark:text-gray-50">
                Chúc mừng bạn đã đăng ký thành công cuộc thi Warrior Developers. Hẹn gặp bạn vào ngày diễn ra sự kiện nhé!
              </p>
              <div className="mt-4">
                <Button
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-100 relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.white)]"
                  onClick={close}
                >
                  Đã hiểu
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <Dialog open={isErrorOpen} as="div" className="relative z-10 focus:outline-none shadow-2xl" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto shadow-2xl">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-2xl"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-neutral-950 dark:text-gray-50">
                Đã xảy ra lỗi,
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-neutral-950 dark:text-gray-50">
                Bạn vui lòng liên hệ BTC tại <a className='font-bold' href="https://www.messenger.com/t/697780110667545">đây</a> để được hỗ trợ nhé!
              </p>
              <div className="mt-4">
                <Button
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-100 relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.white)]"
                  onClick={closeError}
                >
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
