import { MoveRight, Award, Shield, Clock, Users, Truck, Star } from "lucide-react";
import React from "react";

interface AchievementItem {
  icon: React.ReactNode;
  company: string;
  tags: string;
  title: string;
  subtitle: string;
  image: string;
  link?: string;
}

interface Casestudy5Props {
  featuredAchievement: AchievementItem;
  achievements: AchievementItem[];
}

const defaultFeaturedAchievement: AchievementItem = {
  icon: <Award className="h-8 w-8" />,
  company: "Industry Leadership",
  tags: "PHARMACEUTICAL EXCELLENCE / MARKET LEADER",
  title: "14+ Years of Pharmaceutical Excellence",
  subtitle: "Leading Pakistan's healthcare supply chain with unmatched quality and reliability.",
  image: "/case.png",
  link: "#",
};

const defaultAchievements: AchievementItem[] = [
  {
    icon: <Shield className="h-8 w-8" />,
    company: "Quality Assurance",
    tags: "WHO-GMP CERTIFIED / INTERNATIONAL STANDARDS",
    title: "WHO-GMP Certified Operations",
    subtitle: "Maintaining international quality standards across all pharmaceutical products.",
    image: "",
    link: "#",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    company: "Emergency Response",
    tags: "24/7 AVAILABILITY / RAPID DELIVERY",
    title: "Round-the-Clock Emergency Support",
    subtitle: "Critical medicine delivery when healthcare providers need it most.",
    image: "",
    link: "#",
  },
];

export const Casestudy5 = ({
  featuredAchievement = defaultFeaturedAchievement,
  achievements = defaultAchievements,
}: Casestudy5Props) => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            Our Achievements
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Milestones That Define Our Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Razzaq Sons has transformed pharmaceutical supply across Pakistan through innovation, quality, and unwavering commitment to healthcare excellence.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-lg">
          <div className="group grid gap-4 overflow-hidden px-6 transition-colors duration-500 ease-out hover:bg-gray-50 lg:grid-cols-2 xl:px-16">
            <div className="flex flex-col justify-between gap-4 pt-8 md:pt-16 lg:pb-16">
              <div className="flex items-center gap-3 text-2xl font-medium text-gray-900">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {featuredAchievement.icon}
                </div>
                {featuredAchievement.company}
              </div>
              <div>
                <span className="text-xs text-gray-600 sm:text-sm font-semibold tracking-wide uppercase">
                  {featuredAchievement.tags}
                </span>
                <h3 className="mt-4 mb-5 text-2xl font-semibold text-balance sm:text-3xl sm:leading-10 text-gray-900">
                  {featuredAchievement.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {featuredAchievement.subtitle}
                </p>
              </div>
            </div>
            <div className="relative isolate py-16">
              <div className="relative isolate h-full border border-gray-200 bg-white p-2 rounded-lg">
                <div className="h-full overflow-hidden rounded">
                  <img
                    src={featuredAchievement.image}
                    alt="Achievement showcase"
                    className="aspect-[14/9] h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="grid lg:grid-cols-2 max-w-5xl mx-auto">
              {achievements.map((item, idx) => (
                <div
                  key={item.company}
                  className={`group flex flex-col justify-between gap-8 px-8 py-12 transition-colors duration-500 ease-out hover:bg-gray-50 md:py-16 ${
                    idx === 0 ? "" : "border-t lg:border-t-0 lg:border-l border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3 text-xl font-medium text-gray-900">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-200 transition-colors">
                      {item.icon}
                    </div>
                    {item.company}
                  </div>
                  <div>
                    <span className="text-xs text-gray-600 sm:text-sm font-semibold tracking-wide uppercase">
                      {item.tags}
                    </span>
                    <h4 className="mt-3 mb-4 text-xl font-semibold text-balance sm:text-2xl text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};