// src/components/sections/home/TeamPreview.tsx
import SectionWrapper from "@/components/SectionWrapper";
import SectionCTA from "@/components/sectionCTA";
import { Users } from "lucide-react";
import { useState } from "react";
import vish from "@/assets/images/myself_new.jpg";
import shiv from "@/assets/images/shiv.jpg";
import ysv from "@/assets/images/ysv.jpg";

interface Position {
  x: number;
  y: number;
  rotate: number;
}

interface TeamMember {
  id: number;
  role: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
}

interface StatItem {
  label: string;
  value: string;
}

const stats: StatItem[] = [
  { label: 'Team Members', value: '10+' },
  { label: 'Projects', value: '20+' },
  { label: 'Events', value: '15+' }
];

export default function TeamPreview() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const teamMembers: TeamMember[] = [
    {
      id: 0,
      role: "Pre-final Year",
      name: "Vishesh Mishra",
      icon: vish,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500",
    },
    {
      id: 1,
      role: "Pre-final Year",
      name: "Yashasvi Sharma",
      icon: ysv,
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-500",
    },
    {
      id: 2,
      role: "Pre-final Year",
      name: "Shivam Mishra",
      icon: shiv,
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-500",
    },
  ];


  return (
    <SectionWrapper
      title="Meet Our Team"
      description="A glimpse at the people driving Flux forward — blending creativity, tech expertise, and a shared vision for innovation."
      cta={
        <SectionCTA to="/team" label="Meet the Full Team →" variant="primary" />
      }
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 10 + 5;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-primary/10 to-primary/5"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                transform: `scale(${Math.random() * 2 + 1})`,
              }}
            />
          );
        })}
      </div>

      {/* Main team showcase */}
      <div className="flex flex-col items-center space-y-12 max-w-4xl mx-auto">
        {/* Stacked Team Photos */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-150 opacity-50 animate-pulse" />

          {/* Team members container */}
          <div className="relative w-96 h-60 flex items-center justify-center">
            {teamMembers.map((member: TeamMember, index: number) => (
              <div
                key={member.id}
                className={`absolute w-48 h-48 transition-all duration-700 ease-out cursor-pointer group ${
                  isHovered ? 'scale-100' : `scale-${1 - index * 0.05}`
                }`}
                style={{
                  transform: isHovered 
                    ? getHoverPosition(index) 
                    : getStackPosition(index),
                  zIndex: isHovered ? 10 + index : teamMembers.length - index,
                  transitionDelay: isHovered
                    ? `${index * 100}ms`
                    : `${(teamMembers.length - index - 1) * 100}ms`,
                }}
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
                    isHovered ? member.bgColor + "/40" : "bg-transparent"
                  }`}
                />

                {/* Main avatar */}
                <div
                  className={`w-full h-full bg-gradient-to-br ${
                    member.color
                  } rounded-full relative overflow-hidden border-4 border-background/80 shadow-xl transition-all duration-500 ${
                    isHovered ? "border-primary/30 shadow-2xl" : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={member.icon}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-0 group-hover:opacity-20" />

                  {/* Role badge - only visible on hover */}
                  <div
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full border border-primary/20 transition-all duration-500 ${
                      isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  >
                    <div className="text-xs font-semibold text-center">
                      <div className="text-foreground whitespace-nowrap">
                        {member.name}
                      </div>
                      <div className="text-primary/80 text-[10px]">
                        {member.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating particles around each member when hovered */}
                {isHovered && (
                  <div className="absolute inset-0">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/50 rounded-full animate-orbit-member"
                        style={{
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: "3s",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Center interaction hint */}
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 pointer-events-none ${
              isHovered ? "opacity-0 scale-50" : "opacity-60 scale-100"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-pulse">
              <Users className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>

        {/* Dynamic stats that appear on hover */}
        <div
          className={`grid grid-cols-3 gap-8 transition-all duration-700 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {stats.map((stat: StatItem, index: number) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Interactive hint text */}
        <div
          className={`text-center transition-all duration-500 ${
            isHovered ? "opacity-0" : "opacity-70"
          }`}
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span className="animate-bounce">👆</span>
            Hover to meet the team
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
        }

        @keyframes orbit-member {
          0% {
            transform: rotate(0deg) translateX(45px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: rotate(360deg) translateX(45px) rotate(-360deg);
            opacity: 0.3;
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-orbit-member {
          animation: orbit-member 3s linear infinite;
        }
      `}} />
    </SectionWrapper>
  );
}

// Helper functions for positioning
const getStackPosition = (index: number): string => {
  const positions: Position[] = [
    { x: -10, y: 10, rotate: -5 },
    { x: 0, y: 0, rotate: 0 },
    { x: 10, y: 10, rotate: 5 },
  ];
  const pos = positions[index % positions.length];
  return `translateX(${pos.x}px) translateY(${pos.y}px) rotate(${pos.rotate}deg)`;
}

const getHoverPosition = (index: number): string => {
  const positions: Position[] = [
    { x: -20, y: -20, rotate: -10 },
    { x: 0, y: -30, rotate: 0 },
    { x: 20, y: -20, rotate: 10 },
  ];
  const pos = positions[index] || positions[0];
  return `translateX(${pos.x}px) translateY(${pos.y}px) rotate(${pos.rotate}deg)`;
}
