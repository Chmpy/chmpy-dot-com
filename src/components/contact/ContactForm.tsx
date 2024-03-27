import {zodResolver} from "@hookform/resolvers/zod";
import {useForm, Controller} from "react-hook-form";
import {z} from "zod";
import {Form, FormControl, FormDescription, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import NotificationPopup from "@/components/contact/NotificationPopup.tsx";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
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
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isMessageSent, setIsMessageSent] = useState(false);
    const formRef = useRef<HTMLFormElement>(null)

    function onSubmit(values: z.infer<typeof formSchema>) {
        emailjs.init({
            publicKey: 'O96Dm5PFV49o51Lji'
        })
        emailjs.sendForm('service_h62juze', 'template_wnft52s', formRef.current
        ).then(() => {
                setIsMessageSent(true),
                    setIsNotificationOpen(true),
                    form.reset()
            }
        ).catch((error) => {
            console.error(error);
            setIsMessageSent(false);
            setIsNotificationOpen(true);
        });
    }

    const closeNotification = () => {
        setIsNotificationOpen(false);
    };

    return (
        <><Form {...form}>
            <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({field}) => <Input placeholder="John Doe" {...field} />}/>
                    </FormControl>
                    <FormDescription>This is your name.</FormDescription>
                    {form.formState.errors.name &&
                        <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>}
                </FormItem>

                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Controller
                            name="email"
                            control={form.control}
                            render={({field}) => <Input type="email" placeholder="john@example.com" {...field} />}/>
                    </FormControl>
                    <FormDescription>Your email address for communication.</FormDescription>
                    {form.formState.errors.email &&
                        <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>}
                </FormItem>

                <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                        <Controller
                            name="message"
                            control={form.control}
                            render={({field}) => <Textarea placeholder="Enter your message..." rows={4} {...field} />}/>
                    </FormControl>
                    <FormDescription>Your message or inquiry.</FormDescription>
                    {form.formState.errors.message &&
                        <p className="text-red-500 text-xs">{form.formState.errors.message.message}</p>}
                </FormItem>

                <button
                    type="submit"
                    className="relative w-full inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <span
                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                    <span
                        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Send
                    </span>
                </button>
            </form>
        </Form><NotificationPopup
            isOpen={isNotificationOpen}
            isSuccess={isMessageSent}
            onClose={closeNotification}/>
        </>
    );
}