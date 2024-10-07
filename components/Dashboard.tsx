"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import GoalForm from './GoalForm'
import TaskList from './TaskList'

const areas = ['Finances', 'Health', 'Relationships']

export default function Dashboard() {
  const [activeArea, setActiveArea] = useState(areas[0])
  const [showGoalForm, setShowGoalForm] = useState(false)

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Your Dashboard</h2>
      <Tabs defaultValue={activeArea} onValueChange={(value) => setActiveArea(value)}>
        <TabsList>
          {areas.map((area) => (
            <TabsTrigger key={area} value={area}>{area}</TabsTrigger>
          ))}
        </TabsList>
        {areas.map((area) => (
          <TabsContent key={area} value={area}>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>{area} Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={33} className="w-full" />
                  <p className="text-sm text-muted-foreground mt-2">33% of goals completed</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Active Goals</CardTitle>
                  <CardDescription>You have 2 active goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => setShowGoalForm(true)}>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add New Goal
                  </Button>
                </CardContent>
              </Card>
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Today's Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <TaskList area={area} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      {showGoalForm && (
        <GoalForm area={activeArea} onClose={() => setShowGoalForm(false)} />
      )}
    </div>
  )
}