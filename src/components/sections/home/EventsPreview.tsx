import { motion, Variants } from 'framer-motion';
import { Calendar, Clock, Users, Zap, Brain } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionCTA from '@/components/sectionCTA';
import { ReactNode } from 'react';

interface EventItem {
  id: number;
  title: string;
  date: string;
  type: string;
  icon: ReactNode;
  participants: string;
  description: string;
  gradient: string;
  borderGradient: string;
  iconBg: string;
  tagColor: string;
  tagBg: string;
}

// Remove unused interface

export default function EventsPreview() {
  const events: EventItem[] = [
    {
      id: 1,
      title: "Hack-e-thon Series",
      date: "Sep 15 – 16",
      type: "Competition",
      icon: <Zap className="w-5 h-5" />,
      participants: "120+",
      description: "24-48 hour coding challenges focused on real-world problems",
      gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
      borderGradient: "from-orange-500/50 to-red-500/50",
      iconBg: "bg-orange-500/10",
      tagColor: "text-orange-400",
      tagBg: "bg-orange-500/10"
    },
    {
      id: 2,
      title: "Annual Research Conclave",
      date: "Oct 20 – 22",
      type: "Conference",
      icon: <Brain className="w-5 h-5" />,
      participants: "200+",
      description: "Invited talks, panel discussions, and technical workshops with experts",
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      borderGradient: "from-blue-500/50 to-cyan-500/50",
      iconBg: "bg-blue-500/10",
      tagColor: "text-blue-400",
      tagBg: "bg-blue-500/10"
    },
    {
      id: 3,
      title: "Tech Conferences",
      date: "Nov 8 – 10",
      type: "Conference",
      icon: <Users className="w-5 h-5" />,
      participants: "150+",
      description: "Student-led conferences with paper submissions and presentations",
      gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
      borderGradient: "from-purple-500/50 to-violet-500/50",
      iconBg: "bg-purple-500/10",
      tagColor: "text-purple-400",
      tagBg: "bg-purple-500/10"
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1.2, 0.8, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <SectionWrapper
        title={
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              className="absolute -top-4 left-0 w-12 h-0.5 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <span 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Upcoming <span className="text-primary">Events</span>
            </span>
            
            {/* Floating calendar icon */}
            <motion.div
              className="absolute -right-8 top-2 text-primary/30"
              animate={{ 
                y: [0, -4, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Calendar className="w-6 h-6" />
            </motion.div>
          </motion.div>
        }
        description={
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <span className="text-lg text-muted-foreground">
              Stay in the loop with our latest workshops, meetups, and tech festivals designed to{" "}
              <motion.span 
                className="text-primary font-medium"
                animate={{ 
                  textShadow: [
                    "0 0 0px transparent", 
                    "0 0 8px hsl(var(--primary)/0.3)", 
                    "0 0 0px transparent"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                spark your curiosity
              </motion.span>
              .
            </span>
          </motion.div>
        }
        cta={
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SectionCTA 
              to="/events" 
              label="🎯 View All Events →" 
              variant="primary"
            />
          </motion.div>
        }
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Animated background glow */}
              <motion.div
                className={`absolute -inset-1 rounded-xl bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Main card */}
              <div className="relative p-6 bg-card/90 backdrop-blur-sm rounded-xl border border-border hover:border-transparent shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full">
                
                {/* Animated border gradient */}
                <motion.div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{
                    background: `linear-gradient(135deg, ${event.borderGradient.replace('from-', '').replace('/50', '/20').replace(' to-', ', ')}) padding-box, linear-gradient(135deg, ${event.borderGradient.replace('from-', '').replace('/50', '/40').replace(' to-', ', ')}) border-box`,
                    border: '1px solid transparent'
                  }}
                />

                {/* Event type badge */}
                <motion.div 
                  className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${event.tagBg} ${event.tagColor} mb-4`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                >
                  {event.icon}
                  <span>{event.type}</span>
                </motion.div>

                {/* Event title with enhanced typography */}
                <motion.h3 
                  className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {event.title}
                </motion.h3>

                {/* Event description */}
                <p className="text-sm text-muted-foreground/80 mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Event details */}
                <div className="space-y-3 mb-4">
                  <motion.div 
                    className="flex items-center space-x-2 text-sm text-muted-foreground"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-2 text-sm text-muted-foreground"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Users className="w-4 h-4 text-primary" />
                    <span>{event.participants} Expected</span>
                  </motion.div>
                </div>

                {/* Registration status indicator */}
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.6, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    />
                    <span className="text-xs text-green-400 font-medium">Registration Open</span>
                  </div>
                  
                  <motion.button
                    className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More →
                  </motion.button>
                </motion.div>

                {/* Bottom accent line */}
                <motion.div 
                  className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r opacity-30 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${event.borderGradient.replace('from-', '').replace('/50', '').replace(' to-', ', ')})`
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating particles */}
                <motion.div
                  className="absolute top-4 right-4 w-1 h-1 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                <motion.div
                  className="absolute top-8 right-2 w-0.5 h-0.5 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3 + 0.5,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-border/30"
        >
          <motion.div 
            className="inline-flex items-center space-x-3 text-sm text-muted-foreground"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Clock className="w-4 h-4 text-primary" />
            <span>More exciting events coming soon</span>
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [1, 0.4, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </div>
  )
}