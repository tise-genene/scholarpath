"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { registerForWebinar } from '@/lib/api/webinar-registration';
import { useRouter } from 'next/navigation';
import { WebinarRegistration } from '@/types/webinar-registration';
import { WebinarRegistrationFormData } from '@/types/webinar-registration-form';

export function WebinarRegistrationForm({ webinarId }: { webinarId: number }) {
  const [formData, setFormData] = useState<WebinarRegistrationFormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    institution: '',
    academicLevel: 'Undergraduate'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Cast academicLevel to the correct type
      const registrationData: WebinarRegistration = {
        webinarId,
        ...formData,
        academicLevel: formData.academicLevel as 'Undergraduate' | 'Graduate' | 'PhD' | 'Other'
      };

      await registerForWebinar(registrationData);
      
      // Redirect to success page
      router.push(`/webinars/${webinarId}/registered`);
    } catch (err) {
      setError('Failed to register for the webinar. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'academicLevel' 
        ? (value as 'Undergraduate' | 'Graduate' | 'PhD' | 'Other')
        : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="institution">Current Institution</Label>
          <Input
            id="institution"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="academicLevel">Current Academic Level</Label>
          <select
            id="academicLevel"
            name="academicLevel"
            value={formData.academicLevel}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select your academic level</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="PhD">PhD</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Registering...' : 'Register for Webinar'}
      </Button>
    </form>
  );
}
