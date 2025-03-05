/** Partial Utility */

interface CourseGoal {
  title: string
  desc: string
  completeUntil: Date
}

function createCourseGoal(title: string, desc: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}

  courseGoal.title = title
  courseGoal.desc = desc
  courseGoal.completeUntil = date

  return courseGoal as CourseGoal
}

/** Readonly Utility */
const names: Readonly<string[]> = ['Max', 'Anna']
names.push('Missy')
