'use client'

import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return null;
    }

    const user = session?.user;

    return (
        <div className="text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-[#1E293B]/40 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                    <div className="relative bg-linear-to-r from-[#1E293B] to-[#0F172A] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl overflow-hidden group">
                        <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                            <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-amber-500/50 bg-slate-800 shrink-0 shadow-lg shadow-amber-500/10">
                                <Image
                                    src={user?.image || "/default-avatar.png"}
                                    fill
                                    sizes="96px"
                                    alt={user?.name || "User"}
                                    className="object-cover"
                                />
                            </div>

                            <div className="text-center sm:text-left flex-1 space-y-1.5">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center sm:justify-start">
                                    <h1 className="text-2xl font-black tracking-tight text-white">
                                        {user?.name}
                                    </h1>

                                    <span className="mx-auto sm:mx-0 inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] font-bold text-amber-500 tracking-wider uppercase">
                                        Verified Member
                                    </span>
                                </div>

                                <p className="text-sm text-slate-400 font-medium flex items-center justify-center sm:justify-start gap-1.5">
                                    {user?.email}
                                </p>

                                <p className="text-xs text-slate-500 font-medium">
                                    Account ID:{" "}
                                    <span className="font-mono text-slate-400">
                                        {user?.id}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-lg font-bold text-black border-b border-slate-800 pb-4">
                        Account Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-lg font-bold text-black uppercase tracking-wider">
                                Full Name
                            </label>

                            <div className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 font-medium">
                                {user?.name}
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-lg font-bold text-black uppercase tracking-wider">
                                Email Address
                            </label>

                            <div className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-400 font-medium">
                                {user?.email}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;