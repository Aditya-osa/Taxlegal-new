<?php

namespace Database\Seeders;

use App\Models\InternshipReview;
use Illuminate\Database\Seeder;

class InternshipReviewSeeder extends Seeder
{
    public function run(): void
    {
        $row1 = [
            ['text' => 'During this internship, I learned recruitment processes, candidate screening, communication skills, interview coordination, HR operations, and professional workplace etiquettes.', 'author' => 'Sohan Bavan Patil', 'role' => 'Human Resources Intern - 2025'],
            ['text' => 'I learned video editing, team management, graphic designing, learned content writing, learned content creation, learned corporate management skills.', 'author' => 'Amruta Nagapure', 'role' => 'Social Media Intern - 2026'],
            ['text' => 'I learned practical skills in web development, teamwork, problem-solving, and working on real-world projects.', 'author' => 'Trushali Mhatre', 'role' => 'Web Development Intern - 2025'],
            ['text' => 'I walked in as a nervous student and walked out as a confident professional. This program truly lives up to its name.', 'author' => 'Harshika Shersheli', 'role' => 'HR Intern - 2026'],
            ['text' => 'Learned lead generation, client communication, email etiquette, basic business development skills, and improved my research and data handling abilities.', 'author' => 'Jaimin Sanghavi', 'role' => 'Business Dev Intern - 2025'],
            ['text' => 'During my HR internship, I learned recruitment processes, candidate screening, interview coordination, communication skills, database management, and professional workplace etiquette.', 'author' => 'Vankal Jyoti Kailakona', 'role' => 'HR Intern - 2025'],
            ['text' => 'My mentors at TMCPL were incredibly supportive. They trusted me with client calls and that built my confidence immensely.', 'author' => 'Almaj Chavan', 'role' => 'Social Media Marketing Intern - 2025'],
            ['text' => 'Communication, overall understanding in HR. Helped me turn knowledge into experience, and confidence into action.', 'author' => 'Sneha Arun Rai', 'role' => 'Social Media Marketing Intern - 2026'],
        ];

        $row2 = [
            ['text' => 'Learned recruitment processes, professional communication, interview coordination, candidate handling, teamwork, corporate etiquette, and confidence in HR responsibilities.', 'author' => 'Snehal Santosh Jadhav', 'role' => 'Human Resources Intern - 2026'],
            ['text' => 'I learned how to speak confidently, how to go through JD , resume, how to create JD, GD and mail send to the candidate.', 'author' => 'Shreyashree Sharma', 'role' => 'HR Intern - 2026'],
            ['text' => 'The structured feedback sessions helped me identify my strengths. I still use the frameworks learned here every day.', 'author' => 'Siddhesh Suresh Pawar', 'role' => 'Social Media Marketing Intern - 2026'],
            ['text' => 'TMCPL didn\'t just teach me skills — they gave me a mindset. I now approach every challenge with a consultant\'s perspective.', 'author' => 'Alvira Shaikh', 'role' => 'Social Media Marketing Intern - 2026'],
            ['text' => 'I learned how the actual human resource works, gained hands-on experience in recruiting process, and how to deal with candidates more efficiently.', 'author' => 'Tejashri Daiphode', 'role' => 'Human Resources Intern - 2026'],
            ['text' => 'I created content that actually got published on TMCPL\'s channels. That portfolio piece helped me land my first job.', 'author' => 'Ishwari Shanmugavel', 'role' => 'Human Resources Intern - 2026'],
            ['text' => 'The internship was a rewarding experience that allowed me to learn, grow, and gain confidence in a professional environment. I appreciate the support and mentorship provided by the team.', 'author' => 'Nutan More', 'role' => 'Accounting Intern - 2026'],
        ];

        foreach ($row1 as $i => $review) {
            InternshipReview::create(array_merge($review, ['row' => 1, 'linkedin_url' => null, 'is_active' => true, 'sort_order' => $i + 1]));
        }

        foreach ($row2 as $i => $review) {
            InternshipReview::create(array_merge($review, ['row' => 2, 'linkedin_url' => null, 'is_active' => true, 'sort_order' => $i + 1]));
        }
    }
}
