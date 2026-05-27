"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

const SingUpPage = () => {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        // console.log(user);
        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            image: user.image,
            password: user.password,
        });
        // console.log({ data, error });

        if (data) {
            // toast.success('Sign up Successful');
            router.push("/");
        }
        if (error) {
            alert('error')
            // toast.error(error.message);
        }
    };
    const handleGoogle=async()=>{
        await authClient.signIn.social({
            provider:'google',

        })
    }
    return (
        <div className="max-w-7xl mx-auto p-10">
            <div className="text-center p-3">
                <h1 className="text-4xl font-bold">Create Account</h1>
                <p className="text-xl mt-1">Start your adventure with sports next</p>
            </div>
            <Card className="rounded-xl p-5">
                <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Your Full Name</Label>
                        <Input placeholder="your name" />
                        <FieldError />
                    </TextField>
                    <TextField

                        name="image"
                        type="ImageUrl"
                    >
                        <Label>Image Url</Label>
                        <Input placeholder="Your imageUrl" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex justify-center gap-2">
                        <Button className={'w-full rounded-xl bg-mist-600'} type="submit">
                            <Check />
                            Create Account
                        </Button>




                    </div>
                </Form>
                <div className="flex items-center gap-4">
                    <div className="h-px bg-slate-700 flex-1" />
                    <span className="text-slate-500 text-[10px] font-bold tracking-[0.2em]">OR</span>
                    <div className="h-px bg-slate-700 flex-1" />
                </div>
                <Button
                    onClick={handleGoogle}
                    className="w-full py-5 bg-transparent border-2 text-black rounded-xl flex items-center justify-center gap-3 transition-all font-bold text-sm"
                >
                    <FcGoogle className="text-xl" />
                    Continue with Google
                </Button>
                <p className="text-center text-slate-400 text-sm font-medium">
                    Already have an account?{' '}
                    <Link href="/login" className="text-amber-500 font-bold hover:underline transition-all">
                        Log in
                    </Link>
                </p>
            </Card>
        </div>
    );
};

export default SingUpPage;