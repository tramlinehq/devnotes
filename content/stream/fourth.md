+++
date = 2019-11-28T15:31:00Z
who = "kitallis"
+++

```ruby
module LogFriendExtensions
  if Rails.env.development? || Rails.env.test?
    # This Regexp is used to find the name of the thing being logged, so that we can then
    # print out the name along with the value of the object logged.
    CALL_SITE_REGEXP = /^\s*d\s*\(?(.*)\)?\s*$/

    def d(msg)
      location = caller_locations(1..1).first
      path = location.absolute_path
      line = Pathname(path).readlines[location.lineno - 1]

      arg_name =
        if (match = line.match(CALL_SITE_REGEXP))
          match[1]
        else
          "error finding arg name"
        end
      pp [arg_name, msg]
    end
  else
    # Shim a noop method for non dev / test environments
    def d(_msg)
    end
  end
end
```