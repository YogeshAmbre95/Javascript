def find_next_date(day, time)
  now = Time.now

  if (day == now.day && time > now.strftime("%H%M%S%N")) || day > now.day
    DateTime.new(now.year, now.month, day, time)
  else
    if now.month + 1 > 12
      year += 1
      month = 1
    else
      year = now.year
      month = now.month + 1
    end

    DateTime.new(year, month, day, time)
  end
end