import { useForm } from "react-hook-form";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { motion } from "framer-motion";
import type{ ContactFormData } from "../../types/contact.interface";
import { addToast } from "@heroui/toast";
import { FaDownload } from "react-icons/fa";
import { PROFILE_CARD_DATA } from "../../../../constants/profile/profile_card";


export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        addToast({
          title: "Message sent!",
          description: "I'll get back to you soon. Thanks for reaching out.",
          color: "success"
        });
        reset();
      } else {
        addToast({
          title: "Error sending",
          description: result.message || "An error occurred. Please try again.",
          color: "danger"
        });
      }
    } catch (error) {
      console.error('Error:', error);
      addToast({
        title: "Connection error",
        description: "Check your internet connection and try again.",
        color: "danger"
      });
    }
  };

  return (
    <section className="pb-16 px-4 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-primary-color">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind or just want to say hi?
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="px-4 mb-12"
        >
          <Card className="transition-all duration-300 bg-gray-900/50 border border-gray-800">
            <CardBody className="p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <Input
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters"
                      }
                    })}
                    type="text"
                    label="Name"
                    placeholder="Your Name"
                    variant="bordered"
                    isInvalid={!!errors.name}
                    errorMessage={errors.name?.message}
                    classNames={{
                      input: "text-white",
                      label: "text-gray-300",
                      inputWrapper: "border-gray-700 hover:border-gray-500 focus-within:!border-blue-400"
                    }}
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <Input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    type="email"
                    label="Email"
                    placeholder="your@email.com"
                    variant="bordered"
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                    classNames={{
                      input: "text-white",
                      label: "text-gray-300",
                      inputWrapper: "border-gray-700 hover:border-gray-500 focus-within:!border-blue-400"
                    }}
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <Textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters"
                      }
                    })}
                    label="Message"
                    placeholder="Your Message"
                    variant="bordered"
                    minRows={6}
                    isInvalid={!!errors.message}
                    errorMessage={errors.message?.message}
                    classNames={{
                      input: "text-white",
                      label: "text-gray-300",
                      inputWrapper: "border-gray-700 hover:border-gray-500 focus-within:!border-blue-400"
                    }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full font-bold text-white shadow-lg shadow-blue-900/20"
                    style={{ backgroundColor: 'var(--color-blue-400)' }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </CardBody>
          </Card>
        </motion.div>

        {/* Extra Links Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
            <div className="w-full h-px bg-gray-800" />
            
            <div className="flex flex-col md:flex-row items-center gap-6">
                <Button
                    as="a"
                    href="/Galarza_Emilia_CV.pdf"
                    download="Galarza_Emilia_CV.pdf"
                    variant="bordered"
                    className="font-semibold py-6 px-8 border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
                    startContent={<FaDownload />}
                >
                    Download CV
                </Button>

                <div className="flex gap-6">
                    {PROFILE_CARD_DATA.socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors text-2xl bg-gray-900 p-3 rounded-full border border-gray-800 hover:border-gray-600"
                        >
                            {link.icon || link.platform}
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
