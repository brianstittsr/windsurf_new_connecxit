#!/bin/bash

# Array of pages to create
declare -a pages=(
  "about:About:Learn about ConnecXit and our mission"
  "partner:Partner With Us:Join forces with ConnecXit and grow your business"
  "developers:For Developers:Access ConnecXit's API and development resources"
  "press:Press:Latest news and media resources about ConnecXit"
  "blog:Blog:Latest updates, tips, and stories from ConnecXit"
  "how-to-use:How To Use ConnecXit:A comprehensive guide to using ConnecXit"
  "get-app:Get The App:Download the ConnecXit mobile app"
  "services-near-me:Services Near Me:Find event services in your area"
  "cost-estimates:Cost Estimates:Understand pricing for event services"
  "vendor-resource-center:Vendor Resource Center:Resources for event vendors"
  "inspiration:Event Planner Inspiration Pictures:Get inspired by beautiful events"
  "for-pros:ConnecXit for Pros:Everything you need to know about being a pro on ConnecXit"
  "pro-signup:Sign Up as a Pro:Start your journey as a ConnecXit professional"
  "community:Community:Join the ConnecXit community"
  "pro-resources:Pro Resources:Resources for ConnecXit professionals"
  "pro-reviews:Pro Reviews:Reviews and ratings system for pros"
  "iphone-app:iPhone App for Pros:Get the ConnecXit Pro iOS app"
  "android-app:Android App for Pros:Get the ConnecXit Pro Android app"
  "help:Help:Support and help center"
  "safety:Safety:Safety guidelines and resources"
  "terms:Terms of Use:ConnecXit terms of service"
  "privacy:Privacy Policy:ConnecXit privacy policy"
  "ca-notice:CA Notice of Collection:California privacy notice"
  "do-not-sell:Do Not Sell or Share Personal Information:Your privacy choices"
)

# Base directory for pages
BASE_DIR="src/app"

# Create pages
for page in "${pages[@]}"; do
  IFS=: read -r path title description <<< "$page"
  
  # Create directory if it doesn't exist
  mkdir -p "$BASE_DIR/$path"
  
  # Create page.tsx file
  cat > "$BASE_DIR/$path/page.tsx" << EOL
'use client';

import PageLayout from '@/components/PageLayout';

export default function ${path^}Page() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">${title}</h1>
          <p className="text-lg text-gray-600">${description}</p>
          
          <div className="mt-8">
            <p className="text-gray-600">Content coming soon...</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
EOL

done

echo "Created all pages successfully!"
