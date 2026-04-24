#!/usr/bin/env ruby
# frozen_string_literal: true

require "fileutils"
require "yaml"

ROOT = File.expand_path("..", __dir__)
SOURCE_DIR = File.join(ROOT, "micro")
OUTPUT_DIR = File.join(ROOT, ".generated-content", "micro")
MONTHS = {
  "Jan" => "01",
  "Feb" => "02",
  "Mar" => "03",
  "Apr" => "04",
  "May" => "05",
  "Jun" => "06",
  "Jul" => "07",
  "Aug" => "08",
  "Sep" => "09",
  "Oct" => "10",
  "Nov" => "11",
  "Dec" => "12"
}.freeze

def slugify(title)
  title
    .split
    .first(6)
    .join(" ")
    .unicode_normalize(:nfkd)
    .encode("ASCII", invalid: :replace, undef: :replace, replace: "")
    .downcase
    .gsub(/['’]/, "")
    .gsub(/[^a-z0-9]+/, "-")
    .gsub(/\A-+|-+\z/, "")
end

def title_from(content, path)
  match = content.match(/^#\s+(.+?)\s*$/)
  raise "Missing H1 heading in #{path}" unless match

  match[1].sub(/\s+\{#.*\}\z/, "").strip
end

def date_from(path)
  parts = path.delete_prefix("#{SOURCE_DIR}/").split("/")
  year, month_name, file_name = parts
  month = MONTHS.fetch(month_name)
  day = file_name.to_i

  format("%s-%s-%02d", year, month, day)
end

FileUtils.rm_rf(OUTPUT_DIR)
FileUtils.mkdir_p(OUTPUT_DIR)

seen_slugs = {}

Dir.glob(File.join(SOURCE_DIR, "**", "*.md")).sort.each do |path|
  content = File.read(path)
  title = title_from(content, path)
  slug = slugify(title)
  raise "Empty slug generated from #{path}" if slug.empty?
  raise "Duplicate slug #{slug.inspect} for #{path} and #{seen_slugs[slug]}" if seen_slugs.key?(slug)

  seen_slugs[slug] = path

  front_matter = {
    "title" => title,
    "slug" => slug,
    "date" => date_from(path),
    "sourcePath" => path.delete_prefix("#{ROOT}/")
  }.to_yaml

  File.write(File.join(OUTPUT_DIR, "#{slug}.md"), "#{front_matter}---\n\n#{content}")
end

puts "Generated #{seen_slugs.length} micro posts"
