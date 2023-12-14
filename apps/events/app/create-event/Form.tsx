'use client';
import BoxField from "@/ui/BoxField";
import Input from "@/ui/Input";
import Select from "@/ui/Select";
import Tabs from "@/ui/Tabs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
    const [payment, setPayment] = useState('Permanent')
    const router = useRouter();
    return (
        <form className="xl:max-w-7xl pb-6 border-2 md:py-6 md:px-8 p-5 border-primary rounded-lg">
            <div className="flex lg:gap-12 gap-6 flex-wrap xl:gap-20">
                <div className="flex flex-col gap-5 flex-1">
                    <Tabs title="Event Type" options={['One-Time', 'Permanent']} name="payment" value={payment} onChange={e => setPayment(e.target.value)} />
                    <Input title="Event Name" placeholder="Title" />
                    {payment === 'Permanent' ? (
                        <>
                            <div className="flex gap-2">
                                <Select title="Date">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>Every</option>
                                </Select>
                                <label className="mt-[2.25em]">Week</label>
                            </div>
                            <div className="flex gap-1 -mt-3">
                                <BoxField title="S" name="day" />
                                <BoxField title="T" name="day" />
                                <BoxField title="W" name="day" />
                                <BoxField title="T" name="day" />
                                <BoxField title="F" name="day" />
                                <BoxField title="S" name="day" />
                            </div>
                            <Input type="time" className="mt-auto" title="Time" />
                        </>
                    ) : (
                        <>
                            <div>
                                <label>Start Date & Time</label>
                                <div className="grid gap-1 grid-cols-2 mt-[0.25em]">
                                    <input className="Form-Field" type="date" />
                                    <input className="Form-Field" type="time" />
                                </div>
                            </div>
                            <div>
                                <label>End Date & Time</label>
                                <div className="grid gap-1 grid-cols-2 mt-[0.25em]">
                                    <input className="Form-Field" type="date" />
                                    <input className="Form-Field" type="time" />
                                </div>
                            </div>
                            <Input title="Application Deadline" type="date" />
                        </>
                    )}
                </div>
                <div className="flex flex-col gap-5 flex-1">
                    <Input title="Location" placeholder="Offline location or online" />
                    <Input title="Fee" placeholder="0000 YEN" />
                    <Input title="Organizer" placeholder="Name + (Email)" />
                    <Input title="Personnel" placeholder="minimum5" />
                    <Input type="url" title="Chat Link" placeholder="Chat Link" />
                </div>
                <div className="flex flex-col xl:flex-2 w-full xl:w-[initial] xl:mr-3">
                    <label htmlFor="description" className="pb-[0.25em]">Description</label>
                    <div className="flex flex-col flex-1 relative">
                        <label className="btn-icon text-xl absolute">
                            <i className="fa-regular fa-image"></i>
                            <input type="file" accept="images/*" className="hidden" />
                        </label>
                        <textarea id="description" className="Form-Field w-full flex-1 pt-14 peer" rows={10} />
                        <label htmlFor="description" className="absolute top-14 px-[0.645em] peer-focus:hidden text-accent-10 opacity-90 z-1">
                            Brief introduction, <br />
                            What to bring, precautions, whether the event can be held depending on the weather, etc.
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex-middle">
                <div className="grid grid-cols-2 h4 sm:gap-8 gap-4 mt-14">
                    <button onClick={router.back} className="btn-primary rounded-lg bg-accent-9 text-black" type="button">Cancel</button>
                    <button className="btn-primary rounded-lg sm:px-[2em] md:px-[3em]">Create Event</button>
                </div>
            </div>
        </form>
    )
}