import { useForm } from "react-hook-form";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { motion } from "framer-motion";
import type{ ContactFormData } from "../../types/contact.interface";
import { addToast } from "@heroui/toast";


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
          title: "¡Mensaje enviado!",
          description: "Te responderé pronto. Gracias por contactarme.",
          color: "success"
        });
        reset();
      } else {
        addToast({
          title: "Error al enviar",
          description: result.message || "Ocurrió un error. Inténtalo de nuevo.",
          color: "danger"
        });
      }
    } catch (error) {
      console.error('Error:', error);
      addToast({
        title: "Error de conexión",
        description: "Verifica tu conexión a internet e inténtalo de nuevo.",
        color: "danger"
      });
    }
  };

  return (
    <section className="pb-16 px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-left mb-12 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Create
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Something <span className="text-primary-color">Amazing</span>
          </h3>
        </motion.div>

        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="px-4"
        >
          <Card className="transition-all duration-300">
            <CardBody className="p-8">
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
                    color="secondary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full font-semibold"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </Button>
                </motion.div>
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
