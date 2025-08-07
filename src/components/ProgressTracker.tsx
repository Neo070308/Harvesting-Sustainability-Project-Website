import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Calendar } from "lucide-react";

const ProgressTracker = () => {
  const currentDonated = 743;
  const goal = 1000;
  const progressPercentage = (currentDonated / goal) * 100;
  const remaining = goal - currentDonated;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Current Impact
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Make an Impact Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Our goal is to donate 1,000 pounds before the end of summer!
            </p>
          </div>

          <Card className="mb-8 bg-gradient-subtle border-0 shadow-soft">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className="w-6 h-6 text-accent" />
                <CardTitle className="text-2xl">Summer 2024 Goal</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Main Progress */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Progress to Goal</span>
                  <span className="text-lg font-bold text-primary">{progressPercentage.toFixed(1)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-4" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{currentDonated} lbs donated</span>
                  <span>{goal} lbs goal</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{currentDonated}</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    Pounds Donated
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{remaining}</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <Trophy className="w-4 h-4" />
                    Pounds to Goal
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">45</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Days Remaining
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
              <h3 className="text-xl font-semibold mb-2">Help Us Reach Our Goal!</h3>
              <p className="text-muted-foreground mb-4">
                Every harvest brings us closer to our summer target. Join the movement today!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Badge 
                  variant="secondary" 
                  className="text-sm cursor-pointer hover:bg-secondary/80 transition-colors"
                  onClick={() => {
                    const formSection = document.getElementById('harvest-form');
                    formSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  🥕 Schedule a Harvest
                </Badge>
                <Badge 
                  variant="secondary" 
                  className="text-sm cursor-pointer hover:bg-secondary/80 transition-colors"
                  onClick={() => window.location.href = '/volunteer'}
                >
                  🤝 Become a Volunteer
                </Badge>
                <Badge 
                  variant="secondary" 
                  className="text-sm cursor-pointer hover:bg-secondary/80 transition-colors"
                  onClick={() => window.open('https://www.canva.com/design/DAGp-8Tn1tA/8bEEja8tZfz74qWEa-OcVg/view?utm_content=DAGp-8Tn1tA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb155b785fe', '_blank')}
                >
                  📢 Spread the Word
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;
