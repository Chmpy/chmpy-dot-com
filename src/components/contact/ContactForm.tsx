import {zodResolver} from "@hookform/resolvers/zod";
import {useForm, Controller} from "react-hook-form";
import {z} from "zod";
import {Form, FormControl, FormDescription, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import React from "react";

const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
});

export default function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({field}) => <Input placeholder="John Doe" {...field} />}
                        />
                    </FormControl>
                    <FormDescription>This is your name.</FormDescription>
                    <FormMessage/>
                </FormItem>

                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Controller
                            name="email"
                            control={form.control}
                            render={({field}) => <Input type="email" placeholder="john@example.com" {...field} />}
                        />
                    </FormControl>
                    <FormDescription>Your email address for communication.</FormDescription>
                    <FormMessage/>
                </FormItem>

                <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                        <Controller
                            name="message"
                            control={form.control}
                            render={({field}) => <Textarea placeholder="Enter your message..." rows={4} {...field} />}
                        />
                    </FormControl>
                    <FormDescription>Your message or inquiry.</FormDescription>
                    <FormMessage/>
                </FormItem>

                <button type="submit"
                        className="relative w-full inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span
                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                    <span
                        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Send
                    </span>
                </button>
            </form>
        </Form>
    );
}